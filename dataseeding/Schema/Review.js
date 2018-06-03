const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  // Id: ObjectId,
  // Created_at: Date,
  // User: user_id,
  // propertyResponse: text,
  // Rate: Number,
  // Language: en,
  // Hostel: hostel_id
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
