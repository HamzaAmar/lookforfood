import mongoose from "mongoose";

const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    userId: {
      type: String,
      ref: "User",
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const foodSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    restaurant: {
      type: Schema.Types.ObjectId,
      ref: "Resturent",
      required: true
    },
    images: {
      type: [String]
    },
    nbrPerson: {
      type: Number,
      default: 1
    },
    categories: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true
    },
    cuisine: {
      type: Schema.Types.ObjectId,
      ref: "Cuisine",
      required: true
    },
    comments: {
      type: [commentSchema],
      default: []
    },
    selling: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

export default mongoose.model("Food", foodSchema);
