const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  type: String,
  subtype: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Activity', activitySchema);
