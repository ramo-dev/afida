const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  smartWalletAddress: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  campaignDetails: [
    {
      campaignName: { type: String, required: true },
      description: { type: String, required: true },
      category: { type: String, required: true },
      startDate: { type: Date, required: true },
      endDate: { type: Date, required: true },
      targetAmount: { type: Number, required: true },
      organizerName: { type: String, required: true },
    }
  ],
  donations: [
    {
      amount: { type: Number, required: true },
      date: { type: Date, default: Date.now },
      campaignId: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign' } // Refers to the campaign
    }
  ]
});

module.exports = mongoose.model('User', UserSchema);

