const express = require("express");
const router = express.Router();
const {findOneWorkout,
       createWorkout,
       findAll,
       updateWorkout,
       deleteWorkout
} = require("../controller/workoutcontroller")

router.get("/", findAll);

router.post("/", createWorkout);

router.get("/:id", findOneWorkout);

router.delete("/:id", deleteWorkout);

router.patch("/:id", updateWorkout);

module.exports = router;