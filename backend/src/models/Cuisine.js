import mongoose from "mongoose";

const { Schema } = mongoose;

const cuisineSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

export default mongoose.model("Cuisine", cuisineSchema);
