const express = require('express');
// const { Patient } = require('../models');
const authMiddleware = require('../middleware/authMiddleware');

const { sequelize, Patient } = require("../models");
const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
    const patient = await Patient.create(req.body);
    res.status(201).json(patient);
});

router.get('/', async (req, res) => {
    const patients = await Patient.findAll();
    res.json(patients);
});

router.get('/:id', authMiddleware, async (req, res) => {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) return res.status(404).json({ error: "Patient not found" });
    res.json(patient);
});

router.put('/:id', authMiddleware, async (req, res) => {
    await Patient.update(req.body, { where: { id: req.params.id } });
    res.json({ message: "Patient updated" });
});


router.delete("/:id", authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;

        // Delete the patient
        await Patient.destroy({ where: { id } });

        // Get the correct sequence name dynamically
        const [[{ sequence_name }]] = await sequelize.query(
            `SELECT pg_get_serial_sequence('"Patients"', 'id') AS sequence_name;`
        );

        if (sequence_name) {
            await sequelize.query(`
                SELECT setval('${sequence_name}', COALESCE((SELECT MAX(id) FROM "Patients"), 1), false);
            `);
        }

        res.status(200).json({ message: "Patient deleted successfully" }); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


module.exports = router;
