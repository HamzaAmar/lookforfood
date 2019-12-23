import mongoose from "mongoose";

import User from "./User";
import Promotion from "./Promotion";
import Cuisine from "./Cuisine";
import Restaurant from "./Restaurant";

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { User, Promotion, Cuisine, Restaurant };

export { connectDb };
export default models;
