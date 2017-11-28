// 2017.10.29
// node를 통해 쉽게 js로 서버 실행

const express = require('express');
const port = 8080;
const mysql = require('mysql');
const dbInfo = require('./db_info.js');
const bdParse = require('body-parser');

var con = mysql.createConnection(dbInfo);

var expApp = express();
expApp.set("port", port);
expApp.use(bdParse.urlencoded({
    extended: false
}));
expApp.use(bdParse.json());

// expApp.get("/", function(req, res) {
//     res.send('hello express1');
// });

var func1 = function(req, res) {
    var id = req.query.id;
    console.log(id + "를 요청 하셨습니다.");
    res.send("안녕하세요. " + id + "님");
}
expApp.get("/", func1);
expApp.get("/test", function(req, res) {
    var id = req.query.id;
    console.log(id + "를 요청");
    res.send("나에게 테스트를 주었음");
});

var urlForUserSearch = "/user";
var funcForUserList = function(req, res) {
    var userId = req.query.id;
    var userPwd = req.query.pwd;
    var resText = "";
    if (!userId) {
        // resText = "유저 아이디를 입력해주세요.";
        res.send("유저 아이디를 입력해주세요.");
    } else if (!userPwd) {
        // resText = "비밀번호를 입력해주세요.";
        res.send("비밀번호를 입력해주세요.");
    } else {
        var sql = "select * from user_info where userId=?";
        var values = [userId];
        con.query(sql, values, function(err, rows) {
            if (err) throw err;
            if (rows.length == 0) {
                resText = "입력하신 id: " + userId;
                resText += "와 일치하는 id가 없습니다.";
            } else {
                if (userPwd != rows[0].userPwd) {
                    resText = "입력하신 비밀번호가 틀렸습니다.";
                } else {
                    resText += userId + "님 환영합니다.";
                }
            }
            console.log(resText);
            res.send(rows);
        });
    }
}

expApp.get(urlForUserSearch, funcForUserList);
expApp.post(urlForUserSearch, funcForUserList);
expApp.listen(expApp.get("port"));