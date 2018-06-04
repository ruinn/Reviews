const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String },
  avatar: {type: String},
  first_name: { type: String },
  last_name: { type: String },
  country: { type: String },
  status: { type: String },
  age: { type: Number },
  reviews: [{ type: Schema.Types.ObjectId }],
  created_at: { type: Date, default: Date.now }
});

module.exports = User = mongoose.model('user', UserSchema);
