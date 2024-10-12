const express = require('express');
const router = express.Router();
const Organizer = require('../models/Organizer');

router.get('/', async (req, res) => {
  try {
    const organizers = await Organizer.find();
    res.json(organizers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const { campaignName, description, category, startDate, endDate, targetAmount, organizerName } = req.body;

  const organizer = new Organizer({
    campaignName,
    description,
    category,
    startDate,
    endDate,
    targetAmount,
    organizerName
  });

  try {
    const newOrganizer = await organizer.save();
    res.status(201).json(newOrganizer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
