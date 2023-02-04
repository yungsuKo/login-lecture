"use strict";

const app = require("../app")
const PORT = process.env.PORT || 3000;
console.log(process.env.PORT);

app.listen(PORT, async () => {
    console.log("서버 가동");
});