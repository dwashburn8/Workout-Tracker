const router = require("express").Router();
const db = require("../models/workout")
const path = require("path");


router.post("/api/workouts", async (req, res) => {
  try {
    const data = await db.create(req.body)

    res.json(data)

  } catch (error) {
    console.log(error);

    res.send(error)

  }
});

router.get("/api/workouts", async (req, res) => {
  try {
    const data = await db.find({})

    res.json(data)

  } catch (error) {
    console.log(error);

    res.send(error)

  }
});



router.put("/api/workouts/:id", async (req, res) => {
  try {
    const data = await db.findOneAndUpdate(
      {
        _id: req.params.id
      },
      {
        $push: { exercises: req.body}
      },
      {
        new: true
      }
    );
    console.log(`req.body = ${req.body}`);
    console.log(`data = ${data}`);
    res.json(data);

  } catch (error) {

    console.log(error);

    res.send(error);
  }
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../Develop/public/stats.html"));
});

router.get("/api/workouts/range", async (req, res) => {
  try {
      const data = await db.find({}).sort([["day", -1]]).limit(7)
      console.log(data);
      res.json(data);

  } catch (error) {

      console.log(error);

      res.send(error);
  }
});

module.exports = router;


