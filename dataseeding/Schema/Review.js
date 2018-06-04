const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  propertyResponse: {
  },
  rate: {
    type: Number
  },
  language: {
    type: String
  },
  hostel: {
    type: Schema.Types.ObjectId
  },
  user: {
    type: Schema.Types.ObjectId
  }
});

module.exports = Review = mongoose.model('review', ReviewSchema);
