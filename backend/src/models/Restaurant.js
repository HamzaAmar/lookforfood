import mongoose from "mongoose";

const { Schema } = mongoose;

const locationSchema = new Schema({
  city: {
    type: String,
    required: true,
    trim: true
  },
  locationDetails: [
    {
      address: {
        type: String,
        required: true
      },
      latitude: {
        type: String,
        required: true
      },
      longitude: {
        type: String,
        required: true
      }
    }
  ]
});

const ResturentSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxlength: 250,
    unique: true
  },
  locations: {
    type: [locationSchema],
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  fidelityPricePerPoint: {
    type: Number,
    required: true
  },
  images: {
    type: [String]
  }
});
export default mongoose.model("Resturent", ResturentSchema);
