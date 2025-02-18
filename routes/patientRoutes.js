const express = require('express');
const { Patient } = require('../models');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
    const patient = await Patient.create(req.body);
    res.status(201).json(patient);
});

router.get('/', authMiddleware, async (req, res) => {
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

router.delete('/:id', authMiddleware, async (req, res) => {
    await Patient.destroy({ where: { id: req.params.id } });
    res.json({ message: "Patient deleted" });
});

module.exports = router;
