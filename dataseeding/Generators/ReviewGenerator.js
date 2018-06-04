const mongoose = require('mongoose');
const { MONGO_URI } = require('../../config');
const faker = require('faker');
const Review = require('../Schema/Review');
const Hostel = require('../Schema/Hostel');
const User = require('../Schema/User');

let rawReviews;

const getArrayOfRawReviews = (size = 1000) => {
  var ans = [];

  for (var i = 0; i < size; i++) {
    let review = {};
    review.text = faker.lorem.paragraphs(
      faker.random.number({ min: 1, max: 2 }),
      '\n \r'
    );
    review.rate = Math.round((7 + Math.random() * 3) * 10) / 10;
    review.language = faker.random.arrayElement([
      'ENG',
      'ENG',
      'ENG',
      'ENG',
      'OTH'
    ]);
    review.created_at = faker.date.between('2016-01-01', '2018-01-01');
    review.propertyResponse =
      Math.random() < 0.4
        ? null
        : faker.lorem.sentences(faker.random.number({ min: 1, max: 2 }));
    ans.push(review);
  }

  return ans;
};

const generateReviewData = async rawData => {
  try {
    const db = await mongoose.connect(MONGO_URI);
    console.log('Connected to database');

    // RESET REVIEW COLLECTION
    await Review.remove({});
    console.log('Removed all Review collections');

    // ADD NEW REVIEWS TO DATABASE
    let allPromises = [];

    // attach a hostel id into review
    let hotelDocuments = await Hostel.find({});
    let userDocuments = await User.find({});

    let updatedRawData = rawData.map(eachReview => {
      let hostelIdObj =
        hotelDocuments[~~(Math.random() * hotelDocuments.length)]._id;
      eachReview.hostel = hostelIdObj;
      let userIdObj =
        userDocuments[~~(Math.random() * userDocuments.length)]._id;
      eachReview.user = userIdObj;
      return eachReview;
    });

    updatedRawData.forEach(rawReview => {
      var newReview = new Review(rawReview);
      allPromises.push(newReview.save());
    });
    let allNewReviews = await Promise.all(allPromises);
    console.log('Added new reviews to database');

    let allUserPromises = [];
    let allHostelPromises = [];
    allNewReviews.forEach(newReview => {
      let userId = newReview.user.toString();
      allUserPromises.push(User.findById(userId));

      let hostelId = newReview.hostel.toString();
      allHostelPromises.push(Hostel.findById(hostelId));
    });

    let allUsers = await Promise.all(allUserPromises);
    allPromises = [];
    allUsers.forEach((userDoc, index) => {
      userDoc.reviews.push(allNewReviews[index]._id);
      allPromises.push(userDoc.save());
    });
    await Promise.all(allPromises);
    console.log('Users have been updated with reviews');

    let allHostels = await Promise.all(allHostelPromises);
    allPromises = [];
    allHostels.forEach((hostelDoc, index) => {
      hostelDoc.reviews.push(allNewReviews[index]._id);
      allPromises.push(hostelDoc.save());
    });
    await Promise.all(allPromises);
    console.log('Hostels have been updated with reviews');

    // DISCONNECT DATABASE
    await db.disconnect();
    console.log('Database disconnected');
  } catch (error) {
    console.log('ERROR', error);
  }
};

module.exports = function(numOfReviews) {
  return new Promise(async (resolve, reject) => {
    try {
      rawReviews = getArrayOfRawReviews(numOfReviews);
      await generateReviewData(rawReviews);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};
