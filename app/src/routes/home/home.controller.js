"use strict"

const users = {
    id : ["asdf", "qwer","zxv"],
    password: ["123","234","345"]
}

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
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.password[idx] === password){
                return res.json({
                    success: true,
                    msg: "로그인에 성공하셨습니다."
                });
            }
        }
        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다."
        })
    }
}


module.exports = {
    output,
    process
}