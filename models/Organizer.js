const mongoose = require('mongoose');

const OrganizerSchema = new mongoose.Schema({
  campaignName: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  targetAmount: { type: Number, required: true },
  organizerName: { type: String, required: true },
});

module.exports = mongoose.model('Organizer', OrganizerSchema);
