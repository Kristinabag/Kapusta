const express = require('express');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(path.dirname(require.main.filename), 'public', 'img'));
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

const ClothingItem = require('../models/clothingItem');

const router = express.Router();

router
  .get('/:activity/:temperature/:weatherType', async (req, res) => {
    const { activity } = req.params;
    const { temperature } = req.params;
    const { weatherType } = req.params;
    const clothes = await ClothingItem.find({
      activityFor: activity,
      weatherFor: weatherType,
      temperatureFor: temperature,
    });
    res.json(clothes);
  })
  .post('/new', upload.single('file'), async (req, res) => {
    const {
      name, type, activityFor, temperatureFor, weatherFor, layer,
    } = req.body;
    console.log(req.body);
    const cloth = new ClothingItem({
      name,
      type,
      weatherFor,
      temperatureFor,
      activityFor,
      layer,
      imgUrl: `./img/${req.file.filename}`,
    });
    await cloth.save();
    res.json({ cloth });
  });

module.exports = router;
