"use strict";
const fs = require("fs").promises;

class UserStorage {
    static #getUserInfo(data, id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // => [id, password, name]
        const userInfo = userKeys.reduce((newUser,info) =>{
            newUser[info] = users[info][idx];
            return newUser;
        },{});
        return userInfo;
    }
    static #getUsers(data, isAll,fields){
        const users = JSON.parse(data);
        if(isAll){
            return users;
        }
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers; // ? 여기서의 리턴은..?
        },{})
        return newUsers;
    }

    static getUsers(isAll,...fields){
        // const users = this.#users;
        const users = fs.readFile("./src/databases/tom/users.json")
            .then((data) => {
                return this.#getUsers(data, isAll,fields);
            })
            .catch((err) => console.log(err))
        
        return users;
    }

    static getUserInfo(id){
        return fs.readFile("./src/databases/tom/users.json")
            .then((data) => {
                return this.#getUserInfo(data, id);
            })
            .catch((err) => console.log(err))
    }

    static async save(userInfo){
        const users = await this.getUsers("id", "password", "username");
        if (users.id.includes(userInfo.id)){
            throw "이미 존재하는 아이디 입니다.";
        }
        users.id.push(userInfo.id);
        users.password.push(userInfo.password);
        users.username.push(userInfo.username);
        fs.writeFile('./src/databases/tom/users.json',JSON.stringify(users));
        return {success: true};
    }
}

module.exports = UserStorage;