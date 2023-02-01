"use strict";

class UserStorage {
    // 클래스 안에서 변수를 선언할 떄는 const 필요없음
    // static 정적 변수를 설정할 떄 사용함.
    static #users = {
        id : ["asdf", "qwer","zxv"],
        password: ["123","234","345"],
        name: ["111", "222", "333"]
    }

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers; // ? 여기서의 리턴은..?
        },{})
        return newUsers;
    }
}

module.exports = UserStorage;