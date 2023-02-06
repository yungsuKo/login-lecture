"use strict";

const app = require("../app")
const PORT = process.env.PORT || 3000;
const logger = require('../src/config/logger')
console.log(process.env.PORT);

app.listen(PORT, async () => {
    logger.info(`${PORT}포트에서 서버가 가동되었습니다.`)
});