const express = require("express"); 

const dbRouter = require("./dbRouter.js");

const server = express(); 

server.use(express.json())

server.use("/api/posts", dbRouter)

server.get("/", (req, res) => {
    res.status(200).json({message: "It's working"})
})


server.listen(8000, () => {
    console.log("\n *** Server 8000 is Listening *** \n")
})

