"use strict";

const UserStorage = require('./UserStorage');

class User{
    constructor(body){
        this.body = body;
    }

    async login(){
        const client = this.body;

        try{
            const {id, password} = await UserStorage.getUserInfo(client.id); 
            if(id){
                if(id ===client.id && password === client.password){
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
            }
        }catch (err){
            return {
                success : false,
                err : `${err}`
            }
        }
        
    }
    async register(){
        const client = this.body;
        try{
            const response = await UserStorage.save(client);
            return response;
        }catch(err){
            return {
                success : false,
                err : err
            }
        }
    }
}

module.exports = User;