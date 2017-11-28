// 2017.10.21
// DTO, POJO, Getter,Setter(Property)

class UserDTO {
    private name: string;
    private age: number;
    public address: string;
    setName(name: string): void {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
    setAddress(address: string): void{
        this.address = address;
    }
    getAddress(): string{
        return this.address;
    }
}

// hong.name = "abc"; error
let hong: UserDTO = new UserDTO();
// hong.address = "서울시 강서구 화곡동";
// hong.setName("홍길동");
// console.log(hong.getName());

function doTest1(user: UserDTO, i: number): UserDTO{
    user.setName(i + "홍길동");
    user.setAddress(i + "서울");
    return user;
}

function doTest2(user: UserDTO): UserDTO{
    user = null;
    return user;
}

// let hong:UserDTO = new UserDTO();
doTest1(hong,20);
console.log(hong.getName());
console.log(hong.getAddress());

// doTest1(hong);
// console.log(hong.getName());
// console.log(hong.getAddress());