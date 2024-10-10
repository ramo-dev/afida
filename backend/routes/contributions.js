const express = require('express');
const router = express.Router();
const Contribution = require('../models/Contribution');
const Joi = require('joi');

// Define a schema for validation
const contributionSchema = Joi.object({
  user: Joi.string().min(3).required(),
  amount: Joi.number().positive().required(),
});

// @route   POST api/contributions
// @desc    Add a new contribution
// @access  Public
router.post('/', async (req, res) => {
  // Validate the request body
  const { error } = contributionSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const { user, amount } = req.body;

  try {
    const newContribution = new Contribution({
      user,
      amount,
    });

    const contribution = await newContribution.save();
    res.status(201).json(contribution);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/contributions
// @desc    Get all contributions
// @access  Public
router.get('/', async (req, res) => {
  try {
    const contributions = await Contribution.find();
    res.status(200).json(contributions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
