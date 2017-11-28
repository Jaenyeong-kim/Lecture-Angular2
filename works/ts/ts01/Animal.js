// 2017.10.21
// 생성자, 인터페이스 구현
class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printInfo() {
        console.log("이름: " + this.name);
        console.log("나이: " + this.age);
    }
    printName() {
        console.log("이름: " + this.name);
    }
}
class Bird {
    constructor(kind) {
        this.kind = kind;
    }
    printInfo() {
        console.log("이 새의 종류는 " + this.kind);
    }
}
class Chicken extends Bird {
    constructor() {
        super("닭");
    }
    printInfo() {
        super.printInfo();
        console.log("Chicken print");
    }
}
class Egg extends Chicken {
}
// let c: Animal = new Bird("닭");
let c = new Chicken();
c.printInfo();
c = new Egg();
c.printInfo();
console.log(typeof c);
function printSomething(a) {
    a.printInfo();
}
let dd = new Cat("동동이", 4);
dd.printInfo();
printSomething(dd);
let d2 = new Cat("사랑이", 3);
// d2.printName(); error 
//# sourceMappingURL=Animal.js.map