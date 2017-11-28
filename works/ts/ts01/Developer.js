// 2017.10.21
// 인터페이스 구현, 접근제어자
// class Developer implements Work {
//     goForWork():void {
//         console.log("go For Work");
//     }
//     doWorking():void {
//         console.log("do Working");
//     }
//     goOut():void {
//         console.log("go Out");
//     }
// }
class Worker2 {
    constructor() {
        this.name = "홍길동";
    }
    // constructor(name: string) {
    //     this.name = name;
    // }
    goForWork() {
        console.log("출근 중");
    }
    doWorking() {
        console.log("일 중");
    }
    goOut() {
        console.log("퇴근 중");
    }
}
class Developer extends Worker2 {
    doWorking() {
        console.log(this.name + "개발 중");
    }
}
class Corder extends Worker2 {
    doWorking() {
        console.log(this.name + "코딩 중");
    }
}
function doTest(w) {
    w.doWorking();
    w.goForWork();
    w.goOut();
}
// let dev: Developer = new Developer();
// dev.goForWork();
// dev.doWorking();
// dev.goOut();
let dev = new Developer();
doTest(dev);
let cod = new Corder();
doTest(cod);
//# sourceMappingURL=Developer.js.map