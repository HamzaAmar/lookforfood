import mongoose from "mongoose";
const { Schema } = mongoose;

const foodPrometedSchema = new Schema({
  food: {
    type: String,
    required: true
  },
  used: {
    type: Number,
    required: true
  },
  limit: {
    type: Number,
    required: true
  }
});

const promotionSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  percentage: {
    type: Number,
    required: true
  },
  startsAt: {
    type: Date,
    required: true
  },
  endAt: {
    type: Date,
    required: true
  },
  foods: {
    type: [foodPrometedSchema],
    required: true
  }
});

export default mongoose.model("Promotion", promotionSchema);
