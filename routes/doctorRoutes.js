const express = require("express");
const auth = require("../middleware/authMiddleware");
const { Doctor } = require("../models");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const doctor = await Doctor.create(req.body);
  res.json(doctor);
});

router.get("/", async (req, res) => {
  const doctors = await Doctor.findAll();
  res.json(doctors);
});

module.exports = router;
