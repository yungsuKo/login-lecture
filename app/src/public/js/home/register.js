"use strict";
// dom -> document object model

const username = document.querySelector("#username");
const id = document.querySelector("#id");
const password = document.querySelector("#password");
const passwordCheck = document.querySelector("#password-check");
const registerBtn = document.querySelector("button");

registerBtn.addEventListener('click',register);

async function register(event){
    event.preventDefault();
    
    const req = {
        username : username.value,
        id : id.value,
        password : password.value,
        passwordCheck : passwordCheck.value,
    }
    if(!req.id) return alert("아이디를 입력해주세요!");
    if (req.password !== req.passwordCheck) {
        return alert("비밀번호가 일치하지 않음");
    };
    
    const result = await (await fetch('/register', {
        method : "post",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req),
    })).json();
    if(result.success){
        location.href = "/login";
    }else{
        alert(result.msg);
    }

    console.log(result);

};