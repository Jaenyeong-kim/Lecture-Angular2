// 2017.10.14
// 기본 타입 확인2

let num11: number = 3;
let num22: number = 5;

let str11: string = "String";
let str22: string = "test";

let numArr: Array<number> = [3, 5, 6];

console.log(num11);
console.log(numArr);

let tp: [String, number];
tp = ["1", 2];

let anyTest: any = "any";
anyTest = 3;
anyTest = true;
anyTest = new Number(3);

let anyArr: any[] = [1, 2, 3]

function setuser(): String {
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

function testFunc(str:String, num:number): void {
    console.log("str= " + str);
    console.log("num = " + num);
}
testFunc("문자열", 330);

function throwError(): never {
    throw new Error("nonono");
}

interface testIter {
    str: string,
    num: number;
}

let AjaxUtil = function(ti:testIter) {
    let str: string = "this._str";
    let num: number = 3;
    this.print = function () {
        console.log(ti.str);
        console.log(ti.num);
    }
}

var test1 = {num:30, str:"홍길동"}
var au = new AjaxUtil(test1);
au.print();

class Car {
    carName: string;
    constructor(public pCarName: string) {
        this.carName = pCarName;
    }
}

let sonata = new Car("소나타");
let pStr: string = "현대 자동차 : " + sonata.carName;
console.log(pStr);
// ctrl + shift + b