const mongoose = require('mongoose');
const Activity = require('./models/activity');
const ClothingItem = require('./models/clothingItem');

mongoose.connect('mongodb://localhost:27017/kapusta');

async function seedBase() {
  const activities = [
    new Activity({
      type: 'work',
      subtype: 'office',
    }),
    new Activity({
      type: 'work',
      subtype: 'informal',
    }),
    new Activity({
      type: 'leasure',
      subtype: 'chillingAtHome',
    }),
    new Activity({
      type: 'leasure',
      subtype: 'walkingExploring',
    }),
    new Activity({
      type: 'leasure',
      subtype: 'goingOut',
    }),
    new Activity({
      type: 'sport',
      subtype: 'winter',
    }),
    new Activity({
      type: 'sport',
      subtype: 'water',
    }),
    new Activity({
      type: 'sport',
      subtype: 'jogging',
    }),
    new Activity({
      type: 'sport',
      subtype: 'cycling',
    }),
    new Activity({
      type: 'sport',
      subtype: 'hiking',
    }),
  ];

  const clothes = [
    new ClothingItem({
      name: 'strawHat',
      type: 'hat',
      weatherFor: ['hot', 'warm', 'sunny', 'hotsunny', 'warmsunny'],
      activityFor: ['5fb63e7297039a54b01190a3', '5fb63e7297039a54b01190a5', '5fb63e7297039a54b01190a6'],
    }),
    new ClothingItem({
      name: 'raincoat',
      type: 'top',
      weatherFor: ['warm', 'cold', 'rainy', 'warmrainy', 'coldrainy'],
      activityFor: ['5fb63e7297039a54b01190a3', '5fb63e7297039a54b01190a5'],
    }),
    new ClothingItem({
      name: 'jeans',
      type: 'bottom',
      weatherFor: ['all'],
      // activityFor: ['all'],
    }),
  ];

  // await mongoose.connection.dropDatabase();
  await Activity.insertMany(activities);
  await ClothingItem.insertMany(clothes);
  await mongoose.disconnect();
}

seedBase();
