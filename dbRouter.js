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
        .insert(post)
       .then(posted => {
           res.status(201).json(posted)
       })
       .catch(error => {
           console.log(error)
           res.status(500).json({error: "There was an error while saving the post to the database"})
       })
   }
})

// Having a hard time getting .post() with ID to work
// .post() with ID
// router.post("/:id/comments", (req, res) => {
//     const { id }  = req.params; 
//     if(!id) {
//         res.status(404).json({message: "The post with the specified ID does not exist"})
//     } else  {
//         res.status(400).json({errorMessage: "Please provide text for the comment"})
//         db
//         .insert(id)
//         .then(created => {
//             res.status(201).json(created)
//         })
        
//         .catch(error => {
//             console.log(error)
//             res.status(500).json({error: "There was an error while saving the comment to the database"})
//         })
//     } 
//     })


// .get() 
router.get("/", (req, res) => {
    
    db
    .find()
    .then(show => {
        res.status(201).json(show)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message: "The posts information could not be retrieved"})
    })
})

// .get() ID 
router.get("/:id", (req, res) => {
    const id  = req.params.id; 
    if(!id) {
        res.status(404).json({message: "The post with the specified ID does not exist"})
    } else {
        db
        .findById(id)
        .then(withID => {
            res.status(201).json(withID)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({error: "The post information could not be retrieved"})
        })
    }
})

// 



module.exports = router; 