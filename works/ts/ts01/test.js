// 2017.10.22
// 제네릭
let userList = new Array();
for (let i = 0; i < 5; i++) {
    addUserList(userList, i);
}
function addUserList(userList, num) {
    userList.push(num);
}
console.log(userList);
let testList = new Array();
testList.push(1);
testList.push("1");
testList.push(true);
let tList = new Array();
tList.push(true);
const tt = 3;
let tt2 = 4;
console.log(typeof tt2);
tt2 = "asdf";
console.log(typeof tt2);
let add = function (n1, n2) {
    if (typeof n1 != "number") {
        return "1숫자가 아닙니다.";
    }
    if (typeof n2 != "number") {
        return "2숫자가 아닙니다.";
    }
    return n1 + n2;
};
console.log(add(1, 2));
class Exam {
}
let examList = new Array();
let e = new Exam();
e.name = "e1";
examList.push(e);
e = new Exam();
e.name = "e2";
examList.push(e);
console.log(examList);
class Lotto {
    constructor() {
        this.numbers = new Array();
        this.makeNumbers();
    }
    makeNumbers() {
        while (this.numbers.length < 6) {
            let num = Math.floor(Math.random() * 20) + 1;
            // if (this.numbers.indexOf(num) != -1) {continue;}
            if (this.valiNumbers(num)) {
                continue;
            }
            this.numbers.push(num);
        }
    }
    valiNumbers(num) {
        return this.numbers.indexOf(num) != -1;
    }
    getNumbers() {
        return this.numbers;
    }
}
let lotto = new Lotto();
// lotto.makeNumbers();
console.log(lotto.getNumbers());
let arrs = [new Lotto(), new Lotto(), new Lotto(), new Lotto(), new Lotto()];
let arrs2 = new Array();
arrs2.push(new Lotto());
for (let arr in arrs) {
    // 자바스크립트 foreach문 출력시 key값 가져옴
    console.log(arrs[arr]);
}
// 위와 동일
// for (let i: number = 0, max: number = arrs.length; i < max; i++) {
//     console.log(arrs[i]);
// }
let mn = new Lotto();
let lot1 = new Lotto();
mn = lot1;
// lot1 = mn; error
let testSet = new Set();
// Set은 값 중복 안됨
testSet.add("1");
testSet.add("1");
// key 값 가져오는 반복문
for (let i in testSet) {
    console.log(test[i]);
}
// value 값 가져오는 반복문
for (let ii of testSet) {
    console.log(ii);
}
//# sourceMappingURL=test.js.map