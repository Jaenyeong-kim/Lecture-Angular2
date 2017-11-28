var Person = function(p_name, p_age, p_gender, p_address) {
    var name = p_name;
    var age = p_age;
    var gender = p_gender;
    var address = p_address;

    this.writePersonInfo = function() {
        var str = "<br>이름: " + name;
        str += "<br>나이 : " + age;
        str += "<br>성별 : " + gender;
        str += "<br>주소 : " + address;
        document.write(str);
    }

    this.setName = function(p_name) {
        name = p_name;
    }

    this.getName = function() {
        return name;
    }

    this.play = function() {
        document.write("<br>" + name + "님께서 놀고 있습니다.");
    }
}
