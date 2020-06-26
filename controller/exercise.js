const router = require("express").Router();
const db = require("../models/workout")
const path = require("path");

// authors route loads author-manager.html
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../Develop/public/exercise.html"));
});



module.exports = router