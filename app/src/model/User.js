"use strict";

const UserStorage = require('./UserStorage');

class User{
    constructor(body){
        this.body = body;
    }

    login(){
        const {id, password} = UserStorage.getUserInfo(this.body.id);
        
        if(id){
            if(id ===this.body.id && password === this.body.password){
                return {
                    success : true,
                    msg : "로그인 성공하였씁니다."
                }
            }else{
                return {
                    success : false,
                    msg : "비밀번호가 틀렸습니다."
                }
            }
        }else{
            return {
                success : false,
                msg: "아이디가 존재하지 않습니다."
            }
        }
    }
}

module.exports = User;