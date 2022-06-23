const express = require("express");
const { status } = require("express/lib/response");
const router = express.Router();
const WorkoutDB = require("../data/workout-schema")

router.get("/", function(req, res)  {
    res.json({mes: " Home"})
});

router.post("/", async function(req, res)  {
    const {title, reps, loads} = req.body
    try {
        const workout = await WorkoutDB.create({title, reps, loads })
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({message: error.message})
        
    }
});

router.get("/:id", function(req, res)  {
    res.json({mes: " Get single"})
});

router.delete("/:id", function(req, res)  {
    res.json({mes: " Delete a single"})
});

router.patch("/:id", function(req, res)  {
    res.json({mes: " Patch"})
});

module.exports = router;