const mongoose = require('mongoose');
const Activity = require('./models/activity');
const ClothingItem = require('./models/clothingItem');

mongoose.connect('mongodb://localhost:27017/kapusta');

async function seedBase() {
  const clothes = [
    new ClothingItem({
      name: 'backpack',
      type: 'bag',
      weatherFor: ['clear', 'clouds', 'rain', 'snow'],
      temperatureFor: ['hot', 'warm', 'cold', 'freeze', 'extraFreeze'],
      activityFor: ['work-informal', 'sport-hiking', 'leasure-walking'],
      imgUrl: './img/backpack.png',
    }),
    new ClothingItem({
      name: 'bag',
      type: 'bag',
      weatherFor: ['clear', 'clouds', 'rain', 'snow'],
      temperatureFor: ['hot', 'warm', 'cold', 'freeze', 'extraFreeze'],
      activityFor: ['work-office', 'work-informal', 'leasure-goingout',],
      imgUrl: './img/bag1.png',
    }),
    new ClothingItem({
      name: 'bag',
      type: 'bag',
      weatherFor: ['clear', 'clouds', 'rain', 'snow'],
      temperatureFor: ['hot', 'warm', 'cold', 'freeze', 'extraFreeze'],
      activityFor: ['work-office', 'work-informal', 'leasure-goingout', 'leasure-walking'],
      imgUrl: './img/bag2.png',
    }),
    new ClothingItem({
      name: 'bag',
      type: 'bag',
      weatherFor: ['clear', 'clouds', 'rain', 'snow'],
      temperatureFor: ['hot', 'warm', 'cold', 'freeze', 'extraFreeze'],
      activityFor: ['work-office', 'work-informal', 'leasure-goingout',],
      imgUrl: './img/bag3.png',
    }),
    new ClothingItem({
      name: 'bag',
      type: 'bag',
      weatherFor: ['clear', 'clouds', 'rain', 'snow'],
      temperatureFor: ['hot', 'warm', 'cold', 'freeze', 'extraFreeze'],
      activityFor: ['work-office', 'work-informal', 'leasure-goingout', 'leasure-walking'],
      imgUrl: './img/bag4.png',
    }),
    new ClothingItem({
      name: 'belt',
      type: 'accessory',
      weatherFor: ['clear', 'clouds', 'rain', 'snow'],
      temperatureFor: ['hot', 'warm', 'cold', 'freeze', 'extraFreeze'],
      activityFor: ['work-office', 'work-informal', 'leasure-goingout', 'leasure-walking'],
      imgUrl: './img/belt1.png',
    }),
    new ClothingItem({
      name: 'belt',
      type: 'accessory',
      weatherFor: ['clear', 'clouds', 'rain', 'snow'],
      temperatureFor: ['hot', 'warm', 'cold', 'freeze', 'extraFreeze'],
      activityFor: ['work-office', 'work-informal', 'leasure-goingout', 'leasure-walking'],
      imgUrl: './img/belt2.png',
    }),
    new ClothingItem({
      name: 'belt',
      type: 'accessory',
      weatherFor: ['clear', 'clouds', 'rain', 'snow'],
      temperatureFor: ['hot', 'warm', 'cold', 'freeze', 'extraFreeze'],
      activityFor: ['work-office', 'work-informal', 'leasure-goingout', 'leasure-walking'],
      imgUrl: './img/belt2.png',
    }),
    new ClothingItem({
      name: 'hat',
      type: 'hat',
      weatherFor: ['clear', 'clouds', 'rain'],
      temperatureFor: ['hot', 'warm'],
      activityFor: ['work-informal', 'leasure-goingout', 'leasure-walking'],
      imgUrl: './img/hat1.png',
    }),
    new ClothingItem({
      name: 'baseball cap',
      type: 'hat',
      weatherFor: ['clear', 'clouds', 'rain'],
      temperatureFor: ['hot', 'warm', 'cold'],
      activityFor: ['work-informal', 'leasure-walking', 'sport-jogging', 'sport-hiking'],
      imgUrl: './img/hatBaseball.png',
    }),
    new ClothingItem({
      name: 'bobble hat',
      type: 'hat',
      weatherFor: ['clear', 'clouds', 'rain', 'snow'],
      temperatureFor: ['cold', 'freeze', 'extraFreeze'],
      activityFor: ['work-office', 'work-informal', 'leasure-goingout', 'leasure-walking', 'sport-winter', 'sport-hiking'],
      imgUrl: './img/hatBonbon.png',
    }),
    new ClothingItem({
      name: 'warm hat',
      type: 'hat',
      weatherFor: ['clear', 'clouds', 'rain', 'snow'],
      temperatureFor: ['cold', 'freeze', 'extraFreeze'],
      activityFor: ['work-office', 'work-informal', 'leasure-goingout', 'leasure-walking', 'sport-winter', 'sport-hiking'],
      imgUrl: './img/hatWarm.png',
    }),
    new ClothingItem({
      name: 'sunglasses',
      type: 'glasses',
      weatherFor: ['clear'],
      temperatureFor: ['hot', 'warm'],
      activityFor: ['work-office', 'work-informal', 'leasure-goingout', 'leasure-walking', 'sport-hiking'],
      imgUrl: './img/glassesSun1.png',
    }),
    new ClothingItem({
      name: 'sunglasses',
      type: 'glasses',
      weatherFor: ['clear'],
      temperatureFor: ['hot', 'warm'],
      activityFor: ['work-office', 'work-informal', 'leasure-goingout', 'leasure-walking', 'sport-hiking'],
      imgUrl: './img/glassesSun2.png',
    }),
    new ClothingItem({
      name: 'glasses',
      type: 'glasses',
      weatherFor: ['clouds', 'rain', 'snow'],
      temperatureFor: ['hot', 'warm', 'cold', 'freeze', 'extraFreeze'],
      activityFor: ['work-office', 'work-informal', 'leasure-goingout', 'leasure-walking'],
      imgUrl: './img/glassesOffice.png',
    }),
    new ClothingItem({
      name: 'glasses',
      type: 'glasses',
      weatherFor: ['clouds', 'rain', 'snow'],
      temperatureFor: ['hot', 'warm', 'cold', 'freeze', 'extraFreeze'],
      activityFor: ['work-office', 'work-informal', 'leasure-goingout', 'leasure-walking'],
      imgUrl: './img/glassesPointed.png',
    }),
    new ClothingItem({
      name: 'glasses',
      type: 'glasses',
      weatherFor: ['clouds', 'rain', 'snow'],
      temperatureFor: ['hot', 'warm', 'cold', 'freeze', 'extraFreeze'],
      activityFor: ['work-office', 'work-informal', 'leasure-goingout', 'leasure-walking'],
      imgUrl: './img/glassesRound.png',
    }),
    new ClothingItem({
      name: 'scarf',
      type: 'scarf',
      weatherFor: ['clear', 'clouds', 'rain', 'snow'],
      temperatureFor: ['warm', 'cold', 'freeze', 'extraFreeze'],
      activityFor: ['work-office', 'work-informal', 'leasure-goingout', 'leasure-walking', 'sport-winter', 'sport-hiking'],
      imgUrl: './img/hatBonbon.png',
    }),
  ];

  await mongoose.connection.dropDatabase();
  await ClothingItem.insertMany(clothes);
  await mongoose.disconnect();
}

seedBase();
