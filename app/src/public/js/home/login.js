"use strict";
// dom -> document object model

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener('click',login);

async function login(event){
    event.preventDefault();
    const req = {
        id: id.value,
        password : password.value,
    }
    console.log(req.id)
    const {success, msg} = await (await fetch('/login',{
        method: "post",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(req),
    })).json();
    if(success){
        location.href="/"
        alert(msg);
    }else{
        location.href="/login"
        alert(msg);
    }
};