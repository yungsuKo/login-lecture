"use strict";
// dom -> document object model

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener('click',login);

function login(event){
    event.preventDefault();
    const req = {
        id: id.value,
        password : password.value,
    }
    console.log(req)
};