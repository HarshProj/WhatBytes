const express = require('express');
const { PatientDoctor } = require('../models');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
    const mapping = await PatientDoctor.create(req.body);
    res.status(201).json(mapping);
});

router.get('/', authMiddleware, async (req, res) => {
    const mappings = await PatientDoctor.findAll();
    res.json(mappings);
});

router.get('/:patientId', authMiddleware, async (req, res) => {
    const mappings = await PatientDoctor.findAll({ where: { patientId: req.params.patientId } });
    res.json(mappings);
});

router.delete('/:id', authMiddleware, async (req, res) => {
    await PatientDoctor.destroy({ where: { id: req.params.id } });
    res.json({ message: "Mapping deleted" });
});

module.exports = router;
