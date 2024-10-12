const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Organizer = require('../models/Organizer');
const Joi = require('joi');

const registerSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  smartWalletAddress: Joi.string().required()
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

const organizerSchema = Joi.object({
  campaignName: Joi.string().required(),
  description: Joi.string().required(),
  category: Joi.string().required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  targetAmount: Joi.number().required(),
  organizerName: Joi.string().required()
});

const containerSchema = Joi.object({
  containerName: Joi.string().required(),
  containerDescription: Joi.string().required()
});

router.post('/register', async (req, res) => {
  const { error } = registerSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const { name, email, password, smartWalletAddress } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'User already exists' });

    user = new User({
      name,
      email,
      password,
      smartWalletAddress
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
    res.header('Authorization', token).json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post('/login', async (req, res) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid Credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid Credentials' });

    const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
    res.header('Authorization', token).json({ token, smartWalletAddress: user.smartWalletAddress });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/organizers', async (req, res) => {
  try {
    const organizers = await Organizer.find();
    res.json(organizers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/organizers', async (req, res) => {
  const { error } = organizerSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

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

router.put('/user/container/:id', async (req, res) => {
  const { error } = containerSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const { containerName, containerDescription } = req.body;

  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.container = { containerName, containerDescription };
    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
