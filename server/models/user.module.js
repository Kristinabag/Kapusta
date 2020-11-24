const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  pass: String,
  accessToken: String,
  refreshToken: String,
  // wardrobe: {
  //   type: Array,
  //   default: [],
  // },
});

module.exports = mongoose.model('User', userSchema);
