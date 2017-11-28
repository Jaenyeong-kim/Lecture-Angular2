// 2017.10.21
// 인터페이스 정의, 구현
class Person {
    constructor() {
        this.speed = 30;
    }
    run() {
        return "사람이 " + this.speed + "정도로 뜁니다.";
    }
    setSpeed(speed) {
        this.speed = speed;
    }
    printAddress() {
        return "11";
    }
}
class Robot {
    constructor() {
        this.speed = 30;
    }
    run() {
        return "로봇이 " + this.speed + "정도로 뜁니다.";
    }
    setSpeed(speed) {
        this.speed = speed;
    }
    printAddress() {
        return "";
    }
}
// let p = new Person(); // p의 데이터 타입은 Person 클래스(생략 가능) 
// let p:Person = new Person(); 이것도 가능
let p = new Person();
p.setSpeed(50);
let str4 = p.run();
console.log(str4);
let r = new Robot();
r.setSpeed(1000);
str4 = r.run();
console.log(str4);
function test(vari) {
    console.log(vari.run());
}
//# sourceMappingURL=interface.js.map