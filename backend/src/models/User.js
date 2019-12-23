import mongoose from "mongoose";

const { Schema } = mongoose;

const cardSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  itemsDetails: [
    {
      item: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Food"
      },
      quantity: {
        type: Number,
        min: 0,
        required: true
      }
    }
  ]
});

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 100
  },
  address: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
  confirmedAccount: {
    type: Boolean,
    default: false
  },
  card: {
    type: [cardSchema]
  },
  favorite: [Schema.Types.ObjectId],
  image: String
});

export default mongoose.model("User", userSchema);
