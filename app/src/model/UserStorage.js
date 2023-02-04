"use strict";
const db = require("../config/db.js");

class UserStorage {

    static getUserInfo(id){
        return new Promise((resolve, reject)=>{
            const query = `SELECT * FROM users where id=?;`;
            db.query(query,[id],(err, data)=>{
                if(err) reject(`${err}`);
                resolve(data[0]);
            })
        })
    }

    static async save(userInfo){
        return new Promise((resolve, reject)=>{
            const query = `INSERT INTO users(id, username, password) values(?,?,?);`;
            console.log(userInfo)
            db.query(
                query,
                [userInfo.id, userInfo.username, userInfo.password],
                (err)=>{
                    if(err) reject(`${err}`);
                    resolve({success: true});
                }
            )
        })
    }
}

module.exports = UserStorage;