const router = require("express").Router();
const db = require("../models/workout")

router.post("/api/workouts", async (req, res) => {
try {
  const data = await db.create(req.body)

res.json(data)

} catch (error) {
  console.log(error);

  res.send(error)
  
}
});

// router.post("/api/transaction/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

router.get("/api/workouts", async (req, res) => {
  try {
    const data = await db.find({})
  
  res.json(data)
  
  } catch (error) {
    console.log(error);
  
    res.send(error)
    
  }
});

module.exports = router;
