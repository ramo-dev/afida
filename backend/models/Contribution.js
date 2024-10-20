const mongoose = require('mongoose');

const ContributionSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  wallet: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  goal: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Contribution', ContributionSchema);
