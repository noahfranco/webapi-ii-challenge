const express = require("express"); 

const db = require("./data/db.js"); 

const server = express(); 

server.use(express.json())

server.get("/", (req, res) => {
    res.send("It's working")
})

server.listen(4000, () => {
    console.log("\n *** Server 8000 is Listening *** \n")
})