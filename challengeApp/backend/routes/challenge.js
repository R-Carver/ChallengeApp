const express = require("express");

const Challenge = require('../models/challenge');

const router = express.Router();

router.post("", (req, res, next) => {
    const challenge = new Challenge({
        title: req.body.title,
        description: req.body.description,
        videoLink: req.body.videoLink,
        task: req.body.task
    })
    challenge.save().then(createdChallenge => {
        res.status(201).json({
            messege:'Challenge added successfully',
            challengeId: createdChallenge._id
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
