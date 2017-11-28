// 2017.10.29
// npm install으로 기본 제공하는 모듈과
// 외부 모듈을 추가, 설치하여 사용가능

var http = require('http');
console.log('Server openning');

// req 요청 객체
// res 응답 객체
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Http');
}).listen(8080);

console.log('Server running');