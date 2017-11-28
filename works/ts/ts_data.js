// 2017.10.14
// 기본 타입 확인2
var num11 = 3;
var num22 = 5;
var str11 = "String";
var str22 = "test";
var numArr = [3, 5, 6];
console.log(num11);
console.log(numArr);
var tp;
tp = ["1", 2];
var anyTest = "any";
anyTest = 3;
anyTest = true;
anyTest = new Number(3);
var anyArr = [1, 2, 3];
function setuser() {
    return "test";
}
function testObject() {
    return "abc";
}
var strTest = testObject();
console.log(typeof strTest);
console.log(strTest.charAt(1));
console.log(strTest.length);
console.log(strTest.substr(1));
console.log(strTest);
// strTest = strTest.substr(1);
// console.log(strTest);
function testFunc(str, num) {
    console.log("str= " + str);
    console.log("num = " + num);
}
testFunc("문자열", 330);
function throwError() {
    throw new Error("nonono");
}
var AjaxUtil = function (ti) {
    var str = "this._str";
    var num = 3;
    this.print = function () {
        console.log(ti.str);
        console.log(ti.num);
    };
};
var test1 = { num: 30, str: "홍길동" };
var au = new AjaxUtil(test1);
au.print();
var Car = /** @class */ (function () {
    function Car(pCarName) {
        this.pCarName = pCarName;
        this.carName = pCarName;
    }
    return Car;
}());
var sonata = new Car("소나타");
var pStr = "현대 자동차 : " + sonata.carName;
console.log(pStr);
// ctrl + shift + b 
//# sourceMappingURL=ts_data.js.map