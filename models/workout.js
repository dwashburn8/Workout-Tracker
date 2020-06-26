const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: String,
  name: String,
  distance: Number,
  duration: Number,
  weight: Number,
  sets: Number,
  reps: Number,
  date: {
      type: Date,
      default: Date.now()
  }
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;