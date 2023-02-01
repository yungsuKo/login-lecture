"use strict"
const UserStorage = require('../../model/UserStorage');

const output = {
    home : (req, res) => {
        res.render("home/index")
    },
    login : (req, res) => {
        res.render("home/login")
    }
}

const process = {
    login : (req, res) => {
        const {id, password} = req.body;
        const users = UserStorage.getUsers("id", "password");
        console.log(users);
        const response = {};
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.password[idx] === password){
                response.success = true;
                response.msg = "로그인 성공";
                return res.json(response);
            }
        }
        response.success = false;
        response.msg = "로그인에 실패하였습니다.";
        return res.json(response);
    }
}


module.exports = {
    output,
    process
}