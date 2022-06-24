const WorkoutDB = require("../model/workout-schema")
const mongoose = require("mongoose");

//find all
const findAll = async function(req, res) {
    const workout = await WorkoutDB.find()
    res.status(200).json(workout)

}

//create
const createWorkout = async function(req, res) {
    const { title, reps, loads } = req.body

    //save to database
    try {
        const workout = await WorkoutDB.create({title, reps, loads})
        res.status(200).json(workout);
        
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}

//find one by id
const findOneWorkout = async function(req, res) {
    const { id } = req.params

    //check id if valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message: "Invalid Id"})
    }

    const workout = await WorkoutDB.findById({ _id: id })

    //check if id exist
    if(!workout) {
        return res.status(404).json({message: "data not found"})
    }

    res.status(200).json(workout);
}

//delete one
const deleteWorkout = async function(req, res) {
    const { id } = req.params

    //check id if valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message: "Invalid Id"})
    }

    const workout = await WorkoutDB.findByIdAndDelete({ _id: id })

        //check if id exist
        if(!workout) {
            return res.status(404).json({message: "data not found"})
        }

        res.status(200).json(workout);

}

//update one
const updateWorkout = async function(req, res) {
    const { id } = req.params

        //check id if valid
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({message: "Invalid Id"})
        }
        
    const workout = await WorkoutDB.findByIdAndUpdate({ _id: id }, {
        ...req.body
    })

        //check if id exist
        if(!workout) {
            return res.status(404).json({message: "data not found"})
         }

        res.status(200).json(workout); 
}

module.exports = {
    findAll,
    createWorkout,
    findOneWorkout,
    deleteWorkout,
    updateWorkout
}