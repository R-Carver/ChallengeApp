const express = require("express");
const multer = require("multer");

const Challenge = require('../models/challenge');

const router = express.Router();

const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE_MAP[file.mimetype];
        let error = new Error("Invalid mime type");
        if(isValid){
            error = null;
        }
        //the url here is relative to the server.js file
        cb(error, "backend/images");
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, name + '-' + Date.now() + '.' + ext);
    }
});

//The multer call here is another middleware that runs before the custom 
//function is called

router.post("", multer({storage: storage}).single("image"), (req, res, next) => {
    
    const url = req.protocol + '://' + req.get("host");
    const challenge = new Challenge({
        title: req.body.title,
        description: req.body.description,
        videoLink: req.body.videoLink,
        task: req.body.task,
        imagePath: url + "/images/" + req.file.filename
    })
    challenge.save().then(createdChallenge => {
        res.status(201).json({
            messege:'Challenge added successfully',
            challenge:{
                ...createdChallenge,
                id: createdChallenge._id
            }
        });
    });
})

router.get('',(req, res, next) => {
    Challenge.find().then(documents => {
        res.status(200).json({
            message: "Challenges fetched succesfully!",
            challenges: documents
        });
    });
});

router.get("/:id", (req, res, next) => {
    Challenge.findById(req.params.id).then(challenge => {
        if(challenge){
            res.status(200).json(challenge);
        }else{
            res.status(404).json({message: 'Challenge not found!'});
        }
    })
})

module.exports = router;
