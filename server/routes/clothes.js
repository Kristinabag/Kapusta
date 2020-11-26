const express = require('express');
const multer = require('multer');
const path = require('path');
const ClothingItem = require('../models/clothingItem');
const User = require('../models/user');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, '../client/public/img/');
  },
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

const router = express.Router();

router
  .post('/', async (req, res) => {
    const {
      activityFor, weatherFor, temperatureFor, wardrobeType, user,
    } = req.body;
    if (user.name && wardrobeType === 'myWardrobe') {
      const clothes = await ClothingItem.find({
        user: user.name,
        activityFor,
        weatherFor,
        temperatureFor,
      });
      res.json(clothes);
    } else if (wardrobeType === 'default') {
      const clothes = await ClothingItem.find({
        user: 'defaultUser',
        activityFor,
        weatherFor,
        temperatureFor,
      });
      res.json(clothes);
    }
  })
  .post('/new', upload.single('file'), async (req, res) => {
    try {
      const {
        user, name, type, activityFor, temperatureFor, weatherFor, layer,
      } = req.body;
      const dbUser = await User.findOne({ name: JSON.parse(user).name });
      const cloth = new ClothingItem({
        user: dbUser.name,
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
