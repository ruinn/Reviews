const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HostelSchema = new Schema({
  name: { type: String },
  created_at: { type: Date, default: Date.now },
  ratedFeatures: [
    {
      feature: { type: String },
      rating: { type: Number },
      featureId: { type: Number }
    }
  ],
  reviews: [Schema.Types.ObjectId],
  avgRating: { type: Number }
});

module.exports = Hostel = mongoose.model('hostel', HostelSchema);
