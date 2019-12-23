import mongoose from "mongoose";
const { Schema } = mongoose;

const categorieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  image: String
});

export default mongoose.model("Category", categorieSchema);
