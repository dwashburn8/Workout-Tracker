const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
},
  exercises: [{
    exerciseType: String,
    exerciseName: String,
    distance: Number,
    duration: Number,
    weight: Number,
    sets: Number,
    reps: Number,
  }]



});

const Workout = mongoose.model("workouts", workoutSchema);

module.exports = Workout;