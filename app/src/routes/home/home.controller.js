"use strict"
const UserStorage = require('../../model/UserStorage');
const User = require('../../model/User');
const { response } = require('../../../app');
const logger = require('../../config/logger');

const output = {
    home : (req, res) => {
        res.render("home/index")
    },
    login : (req, res) => {
        res.render("home/login")
    },
    register : (req, res) => {
        res.render("home/register")
    }
}

const process = {
    login : async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        log(response, {
            method : "post",
            path: "/login",
            status: response.err ? 400 : 200
        });
        return res.json(response);
    },
    register : async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        log(response, {
            method : "post",
            path: "/register",
            status: response.err ? 400 : 200
        });
        return res.json(response);
    }
}


module.exports = {
    output,
    process
}

const log = (response, url) => {
    if(response.err){
        logger.error(
            `${url.method} ${url.path} ${url.status} Response: "success: ${response.success}. ${response.err}"`
        )
    }else {
        logger.info(
            `${url.method} ${url.path} ${url.status} Response: "success: ${response.success}. ${response.msg}"`
        )
    }
}