const express = require("express"); 

const db = require("./data/db.js"); 

const server = express(); 

server.use(express.json())


server.post("/api/posts", (req, res) => {
    const post = req.body

   if(!title && !contents) {
       res.status(400).json({errorMessage: "Please provide title and contents for the post."})   
   } else {
       db 
        .find(post)
       .then(posted => {
           res.status(201).json(posted)
       })
       .catch(error => {
           console.log(error)
           res.status(500).json({error: "There was an error while saving the post to the database"})
       })
   }
})

server.listen(4000, () => {
    console.log("\n *** Server 8000 is Listening *** \n")
})