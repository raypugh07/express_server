const express = require("express");
const server = express();
server.use(express.json());

server.get("/", (req, res) =>{
    res.send("Its me its me its DDP");
});

server.listen(7000,()=>{
    console.log("listening to port 7000");
});