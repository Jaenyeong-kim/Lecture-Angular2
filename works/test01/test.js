var Test = function() {
    var num1 = 1;
    var num2 = 2;

    var plus = function() {
        return num1 + num2;
    }

    this.alertStr = function(param1, param2) {
        var str = param1 + param2;
        alert(plus());
        alert(param2);
    }
}

var Test2 = function() {
    // this.test = "1";
    this.alertStr = function() {        
        alert("test2 alertStr");
    }
}

// function test3(p1, p2, p3) {
//     alert("p1, p2, p3 가지고 있음");
// }

// function test3(p1) {
//     alert("p1 가지고 있음");
// }

var obj = {
    test: "1",
    test1: "2"
};

// obj["test"] = "1";
// alert(obj["test"]);
// obj.test = "2";
// alert(obj["test"]);

// var test = "test";
// alert(obj[test]);

// alert(obj.test);
// alert(obj.test1);