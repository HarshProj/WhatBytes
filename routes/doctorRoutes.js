const express = require("express");
const auth = require("../middleware/authMiddleware");
const { Doctor } = require("../models");

const router = express.Router();
router.post("/", auth, async (req, res) => {
  try {
    const { name, specialization, experience } = req.body;

    // Check if the doctor already exists
    const existingDoctor = await Doctor.findOne({ where: { name, specialization } });

    if (existingDoctor) {
      return res.status(400).json({ error: "Doctor with this name and specialization already exists." });
    }

    // Create doctor if not found
    const doctor = await Doctor.create({ name, specialization, experience, userId: req.user.id });

    res.status(201).json(doctor);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
});
router.get("/", async (req, res) => {
  const doctors = await Doctor.findAll();
  res.json(doctors);
});

module.exports = router;
