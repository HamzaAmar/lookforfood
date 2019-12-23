import Restaurant from "../models/Restaurant";

export const addRestaurant = async (req, res, next) => {
  try {
    const addRestaurant = new Restaurant(req.body);
  } catch (error) {}
};
