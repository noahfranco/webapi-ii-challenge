const express = require("express"); 

const db = require("./data/db.js"); 

const router = express.Router(); 

// post()
router.post("/", (req, res) => {
    const post = req.body; 
    const title = req.body.title;
    const contents  = req.body.contents; 
    
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

// .post() with ID
router.post("/:id/comments", (req, res) => {
    const { id }  = req.params; 
    if(!id) {
        res.status(404).json({message: "The post with the specified ID does not exist"})
    } else if(!id) {
        res.status(400).json({errorMessage: "Please provide text for the comment"})
    } else {

        db
        .findById(id)
        .then(created => {
            res.status(201).json(created)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({error: "There was an error while saving the comment to the database"})
        })
    }
})

// .get() 
router.get("/", (req, res) => {
    db
    .insert()
    .then(show => {
        res.status(201).json(show)
    })
    .catch(error => {
        console.log(error)
        res.status(404).json({message: "The post with the specified ID does not exist"})
    })
})

module.exports = router; 