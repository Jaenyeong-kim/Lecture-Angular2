// 2017.10.21
// 인터페이스 구현, 접근제어자

interface Work {
    goForWork():void;
    doWorking():void;
    goOut():void;
}

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

class Worker2 implements Work {
    protected name: string = "홍길동";
    // constructor(name: string) {
    //     this.name = name;
    // }
    goForWork():void {
        console.log("출근 중");
    }
    doWorking():void {
        console.log("일 중");
    }
    goOut():void {
        console.log("퇴근 중");
    }
}

class Developer extends Worker2 {
    doWorking():void {
        console.log(this.name + "개발 중");
    }
}

class Corder extends Worker2 {
    doWorking():void {
        console.log(this.name + "코딩 중");
    }
}

function doTest(w: Work) {
    w.doWorking();
    w.goForWork();
    w.goOut();
}

// let dev: Developer = new Developer();
// dev.goForWork();
// dev.doWorking();
// dev.goOut();

let dev: Work = new Developer();
doTest(dev);
let cod: Work = new Corder();
doTest(cod);