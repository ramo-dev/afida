const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const Contribution = require('../models/Contribution');
const Joi = require('joi');
const contributionSchema = Joi.object({
  id: Joi.string(),
  wallet: Joi.string().min(3).required(),
  goal: Joi.number().positive().required(),
  name: Joi.string().min(3).required(),
  description: Joi.string().min(3).required(),
  date: Joi.date().required(),
  category: Joi.string().min(3).required()
});

router.post('/', async (req, res) => {
  const { error } = contributionSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const { wallet, name, description, goal, date, category } = req.body;

  //create an id from hash of all the fields
  const id = crypto.createHash('md5 ').update(wallet + name + description + goal + date + category ).digest('hex');

  try {
    const newContribution = new Contribution({
      id,
      wallet,
      name, 
      description,
      goal,
      date,
      category
    });

    const contribution = await newContribution.save();
    res.status(200).json({contribution:contribution.id,message:'Contribution added successfully'});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/', async (req, res) => {
  try {
    const contributions = await Contribution.find();
    res.status(200).json(contributions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/my', async (req, res) => {
  try {
    //get wallet from the request
    const wallet = req.query.wallet;
    //get all contributions that have the wallet
    const contributions = await Contribution.find({wallet});
    res.status(200).json(contributions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;