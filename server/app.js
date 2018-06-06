const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const config = require('../config');
require('../dataseeding/Schema/Review');
require('../dataseeding/Schema/User');
const Hostel = require('../dataseeding/Schema/Hostel');

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

app.use(express.static(path.join(__dirname, '../client/dist/')));

app.get('/api/reviews/full/:hostelId', (req, res) => {
  // console.log('hostelId', req.params.hostelId);
  const { hostelId } = req.params;
  Hostel.findById(hostelId)
    .populate({
      path: 'reviews',
      select: ['text', 'user', 'rate', 'created_at', 'propertyResponse', '-_id'],
      populate: { path: 'user', select: 'username' },
    })
    // .populate('reviews')
    .then(data => res.json(data))
    .catch(err => console.log('ERROR', err));
  // res.send('hello');
});

app.get('/api/reviews/overview/:hostelId', async (req, res) => {
  try {
    const { hostelId } = req.params;
    let data = await Hostel.findById(hostelId).populate({
      path: 'reviews',
      // options: { limit: 3, sort: { created_at: -1 } },
      options: { sort: { created_at: -1 } },
      match: { created_at: { $gt: 0 } },
      select: 'text user rate created_at',
      populate: { path: 'user', select: 'username country -_id age status' },
    });

    data = data.toObject();

    const countryCount = {};
    data.reviews.forEach((review) => {
      const { country } = review.user;
      if (countryCount[country]) {
        countryCount[country]++;
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
      .forEach((key) => {
        orderedData[key] = data[key];
      });

    res.send(orderedData);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

app.listen(PORT, () => console.log('Server running on port', PORT));
