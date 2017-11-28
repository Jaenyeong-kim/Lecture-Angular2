// 2017.10.21
// 인터페이스 정의, 구현

interface Action{
    speed:number;
    run(): string;
    setSpeed(speed:number);
    printAddress():string;
}

class Person implements Action{
    speed:number = 30;
    run(){
        return "사람이 "+ this.speed +  "정도로 뜁니다."
    }
    setSpeed(speed:number):void{
        this.speed = speed;
    }
    printAddress():string {
        return "11";
    }
}

class Robot implements Action{
    speed:number = 30;
    run(){
        return "로봇이 " + this.speed +  "정도로 뜁니다."
    }
    setSpeed(speed:number):void{
        this.speed = speed;
    }
    printAddress():string {
        return "";
    }
}

// let p = new Person(); // p의 데이터 타입은 Person 클래스(생략 가능) 
// let p:Person = new Person(); 이것도 가능
let p:Action = new Person();
p.setSpeed(50);
let str4 : string = p.run();
console.log(str4);
let r:Action = new Robot();
r.setSpeed(1000);
str4 = r.run();
console.log(str4);

function test(vari:Action) {
    console.log(vari.run());
}