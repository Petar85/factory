
const express = require("express");
const router = express.Router();
const Worker = require("../models/worker");

router.post("/add", (req, res) => {
  const newWorker = new Worker({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
  });
  newWorker
    .save()
    .then(() => res.json("Worker Added..."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;