const mongoose = require('mongoose');
const { MONGO_URI } = require('../config');
const Hostel = require('../dataseeding/Schema/Hostel');
const User = require('../dataseeding/Schema/User');
const Review = require('../dataseeding/Schema/Review');

let db;
beforeAll(async () => {
  db = await mongoose.connect(MONGO_URI);
});

describe('Database collection', () => {
  describe('Database connection', () => {
    test('mLab database server connected', () => {
      expect(db).toBeTruthy();
    });
  });

  describe('Data checking', () => {
    describe('Hostel collection', () => {
      test('should exist at least one hostel record', async () => {
        const hostelRecord = await Hostel.findOne({});
        expect(hostelRecord._id).toBeTruthy();
      });
      test('each hostel record should have a name field', async () => {
        const hostelRecord = await Hostel.findOne({});
        expect(typeof hostelRecord.name).toEqual(typeof 'string');
        expect(hostelRecord.name.length).toBeGreaterThan(0);
      });
    });

    describe('User collection', () => {
      test('should exist at least one user record', async () => {
        const userRecord = await User.findOne({});
        expect(userRecord._id).toBeTruthy();
      });
      test('each user should have name', async () => {
        const userRecord = await User.findOne({});
        expect(typeof userRecord.first_name).toEqual(typeof 'string');
        expect(userRecord.first_name.length).toBeGreaterThan(0);
      });
      test('each user should have a username', async () => {
        const userRecord = await User.findOne({});
        expect(typeof userRecord.username).toEqual(typeof 'string');
        expect(userRecord.username.length).toBeGreaterThan(0);
      });
    });

    describe('Review collection', () => {
      test('should exist at least one review record', async () => {
        const reviewRecord = await Review.findOne({});
        expect(reviewRecord._id).toBeTruthy();
      });
      test('each review record should contain a text field', async () => {
        const reviewRecord = await Review.findOne({});
        expect(reviewRecord.text).toBeTruthy();
      });
    });
  });
});

afterAll(() => {
  db.disconnect();
});
