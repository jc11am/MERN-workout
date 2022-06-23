require("dotenv").config()

const express = require ("express");
const workout = require ("./routes/routes");
const mongoose = require ("mongoose");

//express app
const app = express();

//middleware
app.use(express.json());

const port = process.env.PORT;

//connect to database
mongoose.connect(process.env.DATABASE)
    .then(function() {
      //listen to port
        app.listen(port, function(){
            console.log("success")
        });  
    })
    .catch(function(error) {
        console.log(error.message)
    });

//routes
app.use("/api/workout/", workout);


