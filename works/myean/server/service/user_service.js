const db = require('../dao/db_util');
var jwt = require('jsonwebtoken');
var dbm = new db();
var userSevice = {};
userSevice.selectUser = selectUser;
userSevice.selectUserHis = selectUserHis;
userSevice.loginUser = loginUser;
userSevice.insertUser = insertUser;

function selectUser(po) {
    return dbm.runSql('SELECT_USER', po);
}

function selectUserHis(po) {
    return dbm.runSql('SELECT_USER_HIS', po);
}

function loginUser(po) {
    return this.selectUser({'userId': po.userId})
    .then((result) => {
        if(result.list.length == 0) {
            return dbm.promiseException(
                {'code': 100,
                 'errno': 01,
                 'sqlMessage': '유저 아이디: \''+ po.userId
                 + '\'는 없는 아이디.'}
            );
        }
        var userPwd = result.list[0].userPwd;
        if (po.userPwd != userPwd) {
            return dbm.promiseException(
                {'code': 100,
                 'errno': 01,
                 'sqlMessage': '유저 아이디: \''+ po.userId 
                 + '\'의 비밀번호를 확인해주세요.'}
            );
        }
        result.list[0].token = jwt.sign({sub: po.userId}, 'login');
        return result;
    })
}

function insertUser(po) {
    console.log(po);
    return this.selectUser({'userId': po.userId})
    .then((result) => {
        if (result.list.length != 0) {
            return dbm.promiseException(
                {'code': 100,
                 'errno': 01,
                 'sqlMessage': '유저 아이디: \''+ po.userId
                 + '\'는 이미 존재하는 아이디.'
                }
            );
        }
        return dbm.updateSql('INSERT_USER', po);
    })
    // .then((result) => {
    //     if (result['list'].affectedRows == 1) {
    //         return this.selectUser({});
    //     }
    // })
}

module.exports = userSevice;