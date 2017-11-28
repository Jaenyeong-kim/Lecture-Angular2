// 2017.10.29
// DB 연결 데이터 조회
// SQL 인젝션

const mysql = require('mysql');
const dbInfo = {
      host: 'localhost'
    , user: 'root'
    , password: ''
    , port: '3306'
    , database: 'ang2'
}

var connection = mysql.createConnection(dbInfo);
console.log("DB 시작");
connection.connect();

console.log("user_info select");
var id = 'tt2';
var pwd = '1';
var sql = "select * from user_info ";
sql += "where userid=? and username=?";
var values = [id, id];

connection.query(sql, function(err, rows, fields) {
    if (!err) {
        // console.log(rows);
    } else {
        // console.log(err);
    }
});

sql = "SELECT UI.*, UH.USERDATA";
sql += " FROM USER_INFO AS UI,";
sql += " USER_HIS AS UH";
sql += " WHERE UI.USERNO=UH.USERNO";

var printRows = function(rows) {
    if (rows.length == 0) {
        console.log("No data");
    } else {
        for (var key in rows) {
            var row = rows[key];
            for (var con in row) {
                console.log("컬럼명: " + con);
                console.log("데이터: " + row[col]);
            }
            console.log("row=> " + row);
        }
    }
}

connection.query(sql, function(err, rows, fields) {
    if (!err) {
        // console.log(rows);
    } else {
        // console.log(err);
    }
});

console.log("DB 종료");
connection.end();