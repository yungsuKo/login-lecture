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
    static getUsers(...fields){
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers; // ? 여기서의 리턴은..?
        },{})
        return newUsers;
    }

    static getUserInfo(id){
        return fs.readFile("./src/databases/tom/users.json")
            .then((data) => {
                return this.#getUserInfo(data, id);
            })
            .catch((err) => console.log(err))
    }

    static save(userInfo){
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.username.push(userInfo.username);
        users.password.push(userInfo.password);
        return {success : true};
    }
}

module.exports = UserStorage;