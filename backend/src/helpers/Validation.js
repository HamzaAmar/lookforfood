import * as Joi from "@hapi/joi";

export const RestaurantValidation = body => {
  const schema = Joi.object().keys({
    name: Joi.string().required()
  });

  schema.validate(body);
};
