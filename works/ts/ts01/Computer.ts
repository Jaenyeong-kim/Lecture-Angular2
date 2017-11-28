// 2017.10.22
// 열거형, any

enum Computer {
    Desktop
    , Laptop
    , NetBook
};

let cp: Computer = Computer.Laptop;

console.log(cp);

// any
// let cp2: any;
// cp2 = "asdf";
// cp2 = 123;
// cp2 = true;

// class EE {
// }

// cp2 = new EE();

function examReturn(): any {
    console.log("examReturn 호출");
    return "examReturn 호출";
}

function examVoid(): void {
    // return "examVoid 호출"; error
}

let a: string;
a = examReturn();
// a = examVoid(); error

let testArr: Array<number> = [1, 2, 3];
console.log(testArr);

class EE {
    name: string = "name";
    pc: Computer;
    constructor(pc: Computer) {
        this.pc = pc;
    }
    printInfo(): void {
        console.log(this.name + "의 PC는 " + this.pc + "입니다.");
    }
}

let ee: EE = new EE(Computer.Laptop);
console.log(ee.printInfo());

let strTest1: string = "str";
let strTest2: string = "str";
let strTest3: String = new String("str");
let strTest4: String = new String("str");

// typescript에서는 String 클래스 함수 변경 불가능
String.prototype.equals = function(str) {
    if (typeof str == "object") {
        return str.toString() == this.toString();
    }
}

console.log("str1==str2 : " + (strTest1 == strTest2));
console.log("str1==str3 : " + (strTest1 == strTest3));
console.log("str1===str3 : " + (strTest1 === strTest2));
console.log("str1===str3 : " + (strTest1 === strTest3));
console.log("str3==str4 " + (strTest3 == strTest4));
console.log("str3===str4 " + (strTest3 === strTest4));
console.log("str3 equals str4 " + (strTest3.equals(strTest4)));

console.log(strTest3.toString());
console.log(strTest4.toString());
