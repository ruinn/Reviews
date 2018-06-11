const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const config = require('../config');
require('../dataseeding/Schema/Review');
require('../dataseeding/Schema/User');
const Hostel = require('../dataseeding/Schema/Hostel');
const Review = require('../dataseeding/Schema/Review');

const PORT = process.env.PORT || 3004;

const app = express();

mongoose
  .connect(config.MONGO_URI)
  .then(() => console.log('Connected to database'))
  .catch(err => console.log('Failed to connect to database:', err));

// Allow CORS
app.use(cors());

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../public/')));

app.get('/api/reviews/:hostelId/all', async (req, res) => {
  try {
    const NUM_OF_REVIEWS_PER_PAGE = 10;
    const { hostelId } = req.params;
    const pageNum = req.query.pageNum || 1;
    const english = req.query.eng || 'true';
    console.log('english?', english);
    const languageMatch = english === 'true' ? { language: 'ENG' } : {};
    console.log('languageMatch', languageMatch);

    //default sortBy for 'newest
    let sortBy = { created_at: -1 };
    switch (req.query.sortBy) {
      case 'newest':
        break;

      case 'oldest':
        sortBy = { created_at: 1 };
        break;

      case 'topRated':
        sortBy = { rate: -1 };
        break;

      case 'lowestRated':
        sortBy = { rate: 1 };
        break;

      case 'ageGroup':
        sortBy = { age: -1 };
        break;

      default:
        break;
    }
    console.log('hostelId', hostelId);
    console.log('pageNum', pageNum);
    console.log('sortBy', sortBy);

    const reviews = await Review.aggregate([
      { $unwind: '$user' },
      { $unwind: '$hostel' },
      {
        $lookup: {
          from: 'hostels',
          localField: 'hostel',
          foreignField: '_id',
          as: 'hostelInfo'
        }
      },
      { $unwind: '$hostelInfo' },
      {
        $match: {
          'hostelInfo._id': mongoose.Types.ObjectId(hostelId)
        }
      },
      {
        $lookup: {
          from: 'users',
          localField: 'user',
          foreignField: '_id',
          as: 'userInfo'
        }
      },
      { $unwind: '$userInfo' },
      {
        $group: {
          _id: '$_id',
          text: { $push: '$text' },
          created_at: { $push: '$created_at' },
          propertyResponse: { $push: '$propertyResponse' },
          language: { $push: '$language' },
          rate: { $push: '$rate' },
          age: { $push: '$userInfo.age' },
          username: { $push: '$userInfo.username' }
        }
      },
      { $unwind: '$age' },
      { $unwind: '$text' },
      { $unwind: '$created_at' },
      { $unwind: '$propertyResponse' },
      { $unwind: '$language' },
      { $unwind: '$rate' },
      { $unwind: '$username' }
    ])
      .sort({ ...sortBy })
      .match({ ...languageMatch });

    console.log(reviews.length);

    const startPoint = (pageNum - 1) * NUM_OF_REVIEWS_PER_PAGE;
    const endPoint = startPoint + NUM_OF_REVIEWS_PER_PAGE;
    res.json({
      total: reviews.length,
      reviewSnippet: reviews.slice(startPoint, endPoint)
    });
  } catch (error) {
    console.log('ERROR', error);
    res.json(error);
  }
});

app.get('/api/reviews/overview/:hostelId', async (req, res) => {
  try {
    const { hostelId } = req.params;
    let data = await Hostel.findById(hostelId).populate({
      path: 'reviews',
      // options: { limit: 3, sort: { created_at: -1 } },
      options: { sort: { rate: -1 } },
      match: { created_at: { $gt: 0 } },
      select: 'text user rate created_at',
      populate: { path: 'user', select: 'username country -_id age status' }
    });

    data = data.toObject();

    const countryCount = {};
    data.reviews.forEach(review => {
      const { country } = review.user;
      if (countryCount[country]) {
        countryCount[country] += 1;
      } else {
        countryCount[country] = 1;
      }
    });
    data.totalReviewCount = data.reviews.length;
    data.reviews = data.reviews.slice(0, 4);
    data.countryCount = countryCount;
    const orderedData = {};
    Object.keys(data)
      .sort()
      .forEach(key => {
        orderedData[key] = data[key];
      });

    res.send(orderedData);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

app.listen(PORT, () => console.log('Server running on port', PORT));
