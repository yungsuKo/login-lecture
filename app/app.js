"use strict";
// 모듈
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
// const accessLogStream = require('./src/config/log.js');

const app = express();
dotenv.config();

// 라우팅
const home = require('./src/routes/home');

const logger = require('./src/config/logger');

// 앱 세팅
app.set('views', "./src/views");
app.set('view engine', "ejs");
app.use(express.static(`${__dirname}/src/public`))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", home);

module.exports = app;