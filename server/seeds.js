const mongoose = require('mongoose');
const Activity = require('./models/activity');
const ClothingItem = require('./models/clothingItem');

mongoose.connect('mongodb://localhost:27017/kapusta');

async function seedBase() {
  // const activities = [
  //   new Activity({
  //     type: 'work',
  //     subtype: 'office',
  //   }),
  //   new Activity({
  //     type: 'work',
  //     subtype: 'informal',
  //   }),
  //   new Activity({
  //     type: 'leasure',
  //     subtype: 'chillingAtHome',
  //   }),
  //   new Activity({
  //     type: 'leasure',
  //     subtype: 'walkingExploring',
  //   }),
  //   new Activity({
  //     type: 'leasure',
  //     subtype: 'goingOut',
  //   }),
  //   new Activity({
  //     type: 'sport',
  //     subtype: 'winter',
  //   }),
  //   new Activity({
  //     type: 'sport',
  //     subtype: 'water',
  //   }),
  //   new Activity({
  //     type: 'sport',
  //     subtype: 'jogging',
  //   }),
  //   new Activity({
  //     type: 'sport',
  //     subtype: 'cycling',
  //   }),
  //   new Activity({
  //     type: 'sport',
  //     subtype: 'hiking',
  //   }),
  // ];

  const clothes = [
    new ClothingItem({
      name: 'backpack',
      type: 'bag',
      weatherFor: ['clear', 'clouds', 'rain', 'snow'],
      temperatureFor: ['hot', 'warm', 'cold', 'freeze', 'extraFreeze'],
      activityFor: ['5fb63e7297039a54b01190a3', '5fb63e7297039a54b01190ab', '5fb63e7297039a54b01190a5'],
      imgUrl: './img/backpack.png',
    }),
    new ClothingItem({
      name: 'bag',
      type: 'bag',
      weatherFor: ['clear', 'clouds', 'rain', 'snow'],
      temperatureFor: ['hot', 'warm', 'cold', 'freeze', 'extraFreeze'],
      activityFor: ['5fb63e7297039a54b01190a2', '5fb63e7297039a54b01190a3', '5fb63e7297039a54b01190a6'],
      imgUrl: './img/bag1.png',
    }),
    new ClothingItem({
      name: 'bag',
      type: 'bag',
      weatherFor: ['clear', 'clouds', 'rain', 'snow'],
      temperatureFor: ['hot', 'warm', 'cold', 'freeze', 'extraFreeze'],
      activityFor: ['5fb63e7297039a54b01190a2', '5fb63e7297039a54b01190a3', '5fb63e7297039a54b01190a6', '5fb63e7297039a54b01190a5'],
      imgUrl: './img/bag2.png',
    }),
    new ClothingItem({
      name: 'bag',
      type: 'bag',
      weatherFor: ['clear', 'clouds', 'rain', 'snow'],
      temperatureFor: ['hot', 'warm', 'cold', 'freeze', 'extraFreeze'],
      activityFor: ['5fb63e7297039a54b01190a2', '5fb63e7297039a54b01190a3', '5fb63e7297039a54b01190a6'],
      imgUrl: './img/bag3.png',
    }),
    new ClothingItem({
      name: 'bag',
      type: 'bag',
      weatherFor: ['clear', 'clouds', 'rain', 'snow'],
      temperatureFor: ['hot', 'warm', 'cold', 'freeze', 'extraFreeze'],
      activityFor: ['5fb63e7297039a54b01190a2', '5fb63e7297039a54b01190a3', '5fb63e7297039a54b01190a5', '5fb63e7297039a54b01190a6'],
      imgUrl: './img/bag4.png',
    }),
    new ClothingItem({
      name: 'belt',
      type: 'accessory',
      weatherFor: ['clear', 'clouds', 'rain', 'snow'],
      temperatureFor: ['hot', 'warm', 'cold', 'freeze', 'extraFreeze'],
      activityFor: ['5fb63e7297039a54b01190a2', '5fb63e7297039a54b01190a3', '5fb63e7297039a54b01190a5', '5fb63e7297039a54b01190a6'],
      imgUrl: './img/belt1.png',
    }),
    new ClothingItem({
      name: 'belt',
      type: 'accessory',
      weatherFor: ['clear', 'clouds', 'rain', 'snow'],
      temperatureFor: ['hot', 'warm', 'cold', 'freeze', 'extraFreeze'],
      activityFor: ['5fb63e7297039a54b01190a2', '5fb63e7297039a54b01190a3', '5fb63e7297039a54b01190a5', '5fb63e7297039a54b01190a6'],
      imgUrl: './img/belt2.png',
    }),
    new ClothingItem({
      name: 'belt',
      type: 'accessory',
      weatherFor: ['clear', 'clouds', 'rain', 'snow'],
      temperatureFor: ['hot', 'warm', 'cold', 'freeze', 'extraFreeze'],
      activityFor: ['5fb63e7297039a54b01190a2', '5fb63e7297039a54b01190a3', '5fb63e7297039a54b01190a5', '5fb63e7297039a54b01190a6'],
      imgUrl: './img/belt2.png',
    }),
    new ClothingItem({
      name: 'hat',
      type: 'hat',
      weatherFor: ['clear', 'clouds', 'rain'],
      temperatureFor: ['hot', 'warm'],
      activityFor: ['5fb63e7297039a54b01190a3', '5fb63e7297039a54b01190a5', '5fb63e7297039a54b01190a6'],
      imgUrl: './img/hat1.png',
    }),
    new ClothingItem({
      name: 'baseball cap',
      type: 'hat',
      weatherFor: ['clear', 'clouds', 'rain'],
      temperatureFor: ['hot', 'warm', 'cold'],
      activityFor: ['5fb63e7297039a54b01190a3', '5fb63e7297039a54b01190a5', '5fb63e7297039a54b01190a9', '5fb63e7297039a54b01190ab'],
      imgUrl: './img/hatBaseball.png',
    }),
    new ClothingItem({
      name: 'bobble hat',
      type: 'hat',
      weatherFor: ['clear', 'clouds', 'rain', 'snow'],
      temperatureFor: ['cold', 'freeze', 'extraFreeze'],
      activityFor: ['5fb63e7297039a54b01190a2', '5fb63e7297039a54b01190a3', '5fb63e7297039a54b01190a5', '5fb63e7297039a54b01190a6', '5fb63e7297039a54b01190a7', '5fb63e7297039a54b01190ab'],
      imgUrl: './img/hatBonbon.png',
    }),
    new ClothingItem({
      name: 'warm hat',
      type: 'hat',
      weatherFor: ['clear', 'clouds', 'rain', 'snow'],
      temperatureFor: ['cold', 'freeze', 'extraFreeze'],
      activityFor: ['5fb63e7297039a54b01190a2', '5fb63e7297039a54b01190a3', '5fb63e7297039a54b01190a5', '5fb63e7297039a54b01190a6', '5fb63e7297039a54b01190a7', '5fb63e7297039a54b01190ab'],
      imgUrl: './img/hatWarm.png',
    }),
    new ClothingItem({
      name: 'sunglasses',
      type: 'glasses',
      weatherFor: ['clear'],
      temperatureFor: ['hot', 'warm'],
      activityFor: ['5fb63e7297039a54b01190a2', '5fb63e7297039a54b01190a3', '5fb63e7297039a54b01190a5', '5fb63e7297039a54b01190a6', '5fb63e7297039a54b01190ab'],
      imgUrl: './img/glassesSun1.png',
    }),
    new ClothingItem({
      name: 'sunglasses',
      type: 'glasses',
      weatherFor: ['clear'],
      temperatureFor: ['hot', 'warm'],
      activityFor: ['5fb63e7297039a54b01190a2', '5fb63e7297039a54b01190a3', '5fb63e7297039a54b01190a5', '5fb63e7297039a54b01190a6', '5fb63e7297039a54b01190ab'],
      imgUrl: './img/glassesSun2.png',
    }),
    new ClothingItem({
      name: 'glasses',
      type: 'glasses',
      weatherFor: ['clouds', 'rain', 'snow'],
      temperatureFor: ['hot', 'warm', 'cold', 'freeze', 'extraFreeze'],
      activityFor: ['5fb63e7297039a54b01190a2', '5fb63e7297039a54b01190a3', '5fb63e7297039a54b01190a5', '5fb63e7297039a54b01190a6'],
      imgUrl: './img/glassesOffice.png',
    }),
    new ClothingItem({
      name: 'glasses',
      type: 'glasses',
      weatherFor: ['clouds', 'rain', 'snow'],
      temperatureFor: ['hot', 'warm', 'cold', 'freeze', 'extraFreeze'],
      activityFor: ['5fb63e7297039a54b01190a2', '5fb63e7297039a54b01190a3', '5fb63e7297039a54b01190a5', '5fb63e7297039a54b01190a6'],
      imgUrl: './img/glassesPointed.png',
    }),
    new ClothingItem({
      name: 'glasses',
      type: 'glasses',
      weatherFor: ['clouds', 'rain', 'snow'],
      temperatureFor: ['hot', 'warm', 'cold', 'freeze', 'extraFreeze'],
      activityFor: ['5fb63e7297039a54b01190a2', '5fb63e7297039a54b01190a3', '5fb63e7297039a54b01190a5', '5fb63e7297039a54b01190a6'],
      imgUrl: './img/glassesRound.png',
    }),
    new ClothingItem({
      name: 'scarf',
      type: 'scarf',
      weatherFor: ['clear', 'clouds', 'rain', 'snow'],
      temperatureFor: ['warm', 'cold', 'freeze', 'extraFreeze'],
      activityFor: ['5fb63e7297039a54b01190a2', '5fb63e7297039a54b01190a3', '5fb63e7297039a54b01190a5', '5fb63e7297039a54b01190a6', '5fb63e7297039a54b01190a7', '5fb63e7297039a54b01190ab'],
      imgUrl: './img/hatBonbon.png',
    }),
  ];

  // await mongoose.connection.dropDatabase();
  // await Activity.insertMany(activities);
  await ClothingItem.insertMany(clothes);
  await mongoose.disconnect();
}

seedBase();
