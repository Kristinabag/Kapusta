const mongoose = require('mongoose');

const clothingItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  weatherFor: {
    type: Array,
    required: true,
  },
  activityFor: [{
    type: String,
    required: true,
  }],
  temperatureFor: [{
    type: String,
    required: true,
  }],
  imgUrl: String,
});

module.exports = mongoose.model('ClothingItem', clothingItemSchema);
