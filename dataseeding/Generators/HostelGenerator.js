const mongoose = require('mongoose');
const { MONGO_URI } = require('../../config');
let rawHostels = require('../JSONS/Hostels.json');
const faker = require('faker');
// load User model
const Hostel = require('../Schema/Hostel');
const featureBank = require('./ratingFeatureHelper');

const getFeatureRatingsArray = () => {
  let ans = [];
  featureBank.forEach(({ feature, featureId }) => {
    let rating =
      Math.random() > 0.45
        ? ~~(Math.random() * 3) + 8
        : ~~(Math.random() * 5) + 6;
    ans.push({ feature, featureId, rating });
  });
  return ans;
};

const getAvgRating = arrOfRatings => {
  var sum = 0;
  for (var each of arrOfRatings) {
    sum += each.rating;
  }
  return Math.round(sum / arrOfRatings.length * 10) / 10;
};

const getArrayOfHostels = (size = 100) => {
  let ans = [];

  for (var i = 0; i < size; i++) {
    let hostel = {};
    hostel.name = faker.random.arrayElement([
      faker.company.companyName(),
      faker.address.county(),
      faker.address.streetSuffix(),
      faker.name.findName()
    ]);
    hostel.created_at = new Date(
      faker.date.between('1990-01-01', '2016-01-01')
    );
    hostel.ratedFeatures = getFeatureRatingsArray();

    hostel.avgRating = getAvgRating(hostel.ratedFeatures);
    hostel.reviews = [];

    ans.push(hostel);
  }

  return ans;
};

async function generateHostelData(rawData) {
  try {
    const db = await mongoose.connect(MONGO_URI);
    console.log('Connect to DB');

    // Remove all Hostel collection
    await Hostel.remove({});
    console.log('Removed all old hostel collections');

    // Add new hostels to database
    let allNewHostelPromises = [];
    rawData.forEach(rawHostel => {
      allNewHostelPromises.push(new Hostel(rawHostel).save());
    });
    await Promise.all(allNewHostelPromises);
    console.log('Added new hostels successfully');

    // Disconnect database
    await db.disconnect();
    console.log('Db disconnected');
  } catch (error) {
    console.log('ERROR', error);
  }
}

module.exports = function(numOfHostels) {
  return new Promise(async (resolve, reject) => {
    try {
      rawHostels = getArrayOfHostels(numOfHostels);
      await generateHostelData(rawHostels);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};
