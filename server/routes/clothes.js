const express = require('express');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, '../client/public/img/');
  },
  // dest: '../client/public/img/',
  filename(req, file, cb) {
    cb(null, `${file.originalname.split('.')[0]}${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
  storage,
  fileFilter(req, file, cb) {
    const filetypes = /jpeg|jpg|png|svg/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }
    return cb(null, false);
  },
});

const ClothingItem = require('../models/clothingItem');

const router = express.Router();

router
  .get('/:activity/:temperature/:weatherType', async (req, res) => {
    const { activity, temperature, weatherType } = req.params;
    const { user } = req.body;
    if (user && user.email) {
      const clothes = await ClothingItem.find({
        // user: user._id,
        user: user.email,
        activityFor: activity,
        weatherFor: weatherType,
        temperatureFor: temperature,
      });
      res.json(clothes);
    } else if (user) {
      const clothes = await ClothingItem.find({
        user: 'defaultUser',
        activityFor: activity,
        weatherFor: weatherType,
        temperatureFor: temperature,
      });
      res.json(clothes);
    }
  })
  .post('/new', upload.single('file'), async (req, res) => {
    try {
      const {
        user, name, type, activityFor, temperatureFor, weatherFor, layer,
      } = req.body;
      const dbUser = await user.findOne({ email: user.email });
      const cloth = new ClothingItem({
        // user: dbUser._id,
        user: dbUser.email,
        name,
        type,
        weatherFor: JSON.parse(weatherFor),
        temperatureFor: JSON.parse(temperatureFor),
        activityFor: JSON.parse(activityFor),
        layer,
        imgUrl: `./img/${req.file?.filename}`,
      });
      await cloth.save();
      res.json({ cloth });
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  });

module.exports = router;
