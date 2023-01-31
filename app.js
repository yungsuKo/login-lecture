const http = require('http');
const app = http.createServer((req,res)=>{
    res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"})
    if(req.url ==="/"){
        res.end('여기에요')
    }
});

app.listen(3001,()=>{
    console.log("서버 가동")
})




// const express = require('express');
// const app = express();

// app.get("/",(req, res)=>{
//     res.send("여기는 루트임.")
// })

// app.listen(3001, function(){
//     console.log('서버 가동')
// })