// 2017.10.21
// 생성자, 인터페이스 구현

interface Animal {
    name: string;
    age: number;
    height: number;
    printInfo(): void;
    //height?: number; 물음표시 선언하지 않아도 됨.
}

class Cat implements Animal {
    name: string;
    age: number;
    height: number;
    constructor(name:string, age:number) {
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

class Bird implements Animal {
    name: string;
    age: number;
    height: number;
    kind: string;
    constructor(kind: string) {
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
    printInfo(): void {
        super.printInfo();
        console.log("Chicken print");
    }
}

class Egg extends Chicken {
    
}

// let c: Animal = new Bird("닭");
let c: Animal = new Chicken();
c.printInfo();
c = new Egg();
c.printInfo();

console.log(typeof c);

function printSomething(a:Animal) {
    a.printInfo();
}

let dd: Cat = new Cat("동동이", 4);
dd.printInfo();
printSomething(dd);

let d2: Animal = new Cat("사랑이", 3);
// d2.printName(); error