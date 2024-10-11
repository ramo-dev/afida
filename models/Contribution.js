const mongoose = require('mongoose');

const ContributionSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Contribution', ContributionSchema);