const express = require('express');
const morgan = require('morgan'); 
const bodyParser = require('body-parser');
const path = require("path");
const app = express();
const dbConfig = require('./conf/dbconfig.js');
const mysql = require('mysql');
const promiseMysql = require('promise-mysql');
var connection = mysql.createConnection(dbConfig);
var connection2 = promiseMysql.createConnection;

app.set('port', (process.env.PORT || 7777));

app.use('/', express.static(__dirname + '/../dist'));
app.use('/scripts', express.static(__dirname + '/../node_modules'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

var generateWhere = function(paramObj){
    var whereStr = '';
    Object.keys(paramObj).forEach((key)=>{
        whereStr += ' and ' + key + '=? ';
    });
    return whereStr;
}

var generateWhereValue = function(paramObj){
    var whereValue = [];
    Object.keys(paramObj).forEach((key)=>{
        whereValue.push(paramObj[key]);
    });
    return whereValue;
}

var errorHandle = (err)=>{
    var result = {};
    result["error"] = {"code" : err.code,
    "no" : err.errno,
    "msg" : err.sqlMessage
    };
    return result;
}

var rowsHandle = (rows)=>{
    var result = {};
    result["list"] = rows;
    return result;
}

app.get('/api/users/:userId',function(req, res, next){
    var sql = 'SELECT userNo, userName, userId, userPwd, complete from user_info where 1=1 ';
    var userId = req.params.userId;
    var values = [];
    if(userId){
        sql += ' and userId=?';
        values[values.length] = userId;
    }
    connection.query(sql, values, (err, rows)=> {
        if(err) throw err;
        console.log('The solution is: ', rows);
        res.json(rows);
    });
});

app.get('/api/users',(req, res, next)=>{
    var result = {};
    var paramObj = JSON.parse(req.query.user);
    var sql = 'SELECT userNo, userName, userId, userPwd,complete from user_info where 1=1 '
    sql += generateWhere(paramObj);
    var values = generateWhereValue(paramObj);
    connection.query(sql, values, (err, rows)=>{
        if(err) throw err;
        console.log(rows);
        result["list"] = rows;
        res.json(result);
    });
    next();
})

app.get('/api/users2',(req, res, next)=>{
    var paramObj = JSON.parse(req.query.user);
    var sql = 'SELECT userNo, userName, userId, userPwd,complete from user_info where 1=1 '
    sql += generateWhere(paramObj);
    var values = generateWhereValue(paramObj);
    connection2(dbConfig).then((conn)=>{
        return conn.query(sql, values);
    })
    .then(rowsHandle)
    .catch(errorHandle)
    .then((result)=>{
        console.log(result);
        res.json(result);
        next();
    });
});

app.get('/api/users',(req, res, next)=>{
    console.log('next!!');
})

app.get('/api/users2',(req, res, next)=>{
    console.log('next!!');
})

app.get('/api/userhis/:userNo', (req, res, next) => {
    var values = [req.params.userNo];
    console.log(values);
    var sql = "select userNo, userData from user_his where userNo=?";
    connection2(dbConfig).then((conn) => {
        return conn.query(sql, values);
    })
    .then(rowsHandle)
    .catch(errorHandle)
    .then((result) => {
        console.log(result);
        res.json(result);
    })
})

// app.post('/api/users',(req, res, next)=>{
//     for(var key in req.body){
//         console.log(key);
//         console.log(req.body[key]);
//     }
// })

app.post('/api/users',(req, res, next)=>{

    var sql = "select userId from user_info where userId = ?";
    var values = [req.body.userId];
    var result = {};
    
    connection2(dbConfig).then((conn)=>{
        return conn.query(sql, values);
    })
    .then(result => {
        if (result.length > 0) {
            throw {"code": "중복에러"}
        }
        return true;
    })
    .then((result)=>{
        // res.json(result);
        sql = "insert into user_info(userId, userName, userPwd, complete)";
        sql += " values(?,?,?,?)";
        values = [req.body.userId, req.body.userName, req.body.userPwd, req.body.complete];
        result = {};

        connection2(dbConfig).then((con) => {
            return con.query(sql, values);
        }).then((result) => {
            console.log(result);
            if (result.affectedRows == 1) {
                result["msg"] = {
                    "code": 200,
                    "msg": "정상 입력!"
                };
            }
            return result;
        }).catch(errorHandle)
        .then((result) => {
            sql = 'SELECT userNo, userName, userId, userPwd, complete from user_info where 1=1 ';
            
            connection2(dbConfig).then((conn)=>{
                return conn.query(sql);
            })
            .then(rowsHandle)
            .catch(errorHandle)
            .then((result)=>{
                console.log(result);
                res.json(result);
            });
            // res.json(result);
        });
    }).catch(errorHandle);
})

app.use((req, res, next)=>{
    res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
});

app.listen(app.get('port'), function() {
    console.log('Angular2 fullstack listening on port '+app.get('port'));
});