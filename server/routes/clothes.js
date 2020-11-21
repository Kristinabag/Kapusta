const express = require('express');
const clothingItem = require('../models/clothingItem');

const router = express.Router();

router
  .get('/:activity/:temperature/:weatherType', async (req, res) => {
    const { activity } = req.params;
    const { temperature } = req.params;
    const { weatherType } = req.params;
    const clothes = await clothingItem.find({
      activityFor: activity,
      weatherFor: weatherType,
      temperatureFor: temperature,
    });
    res.json(clothes);
  });

module.exports = router;
