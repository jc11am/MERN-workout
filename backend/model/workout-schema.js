const mongoose = require ("mongoose");

const workout = mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    reps : {
        type: Number,
        required: true
    },
    loads : {
        type: Number,
        required: true
    }
}, {timestamps: true})

const WorkoutDB =  mongoose.model("WorkoutDB", workout);

module.exports = WorkoutDB;