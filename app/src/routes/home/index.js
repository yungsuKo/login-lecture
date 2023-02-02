"use strict";
const express = require('express');
const router = express.Router();
const {output, process} = require('./home.controller')

router.get("/", output.home)
router.get("/login", output.login)
router.post("/login", process.login)
router.get("/register", output.register)

module.exports = router;