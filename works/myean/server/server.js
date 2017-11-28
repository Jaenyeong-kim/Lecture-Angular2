const express = require('express');
const morgan = require('morgan'); 
const bodyParser = require('body-parser');
const path = require("path");
const app = express();
const us = require('./service/user_service');
const uc = require('./controller/user_controller');

app.set('port', (process.env.PORT || 7777));

app.use('/', express.static(__dirname + '/../dist'));
app.use('/scripts', express.static(__dirname + '/../node_modules'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use('/api/users', uc);

// app.get('/api/users',(req, res, next)=>{
//    var po = {}
//    if (req.query.user) {
//        po = JSON.parse(req.query.user);
//    }
//    console.log(po);
//    us.selectUser(po)
//    .then((result) => {
//        res.json(result);
//    })
// });

// app.get('/api/users/his/:userNo',(req, res, next)=>{
//     var po = {}
//     if (req.query.user) {
//         po = JSON.parse(req.query.user);
//     }
//     console.log(po);
//     us.selectUserHis(po)
//     .then((result) => {
//         console.log("success " + result);
//         res.json(result);
//     });
//  });

app.use((req, res, next)=>{
    res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
});

app.listen(app.get('port'), function() {
    console.log('Angular2 fullstack listening on port ' + app.get('port'));
});