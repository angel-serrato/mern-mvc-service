import Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().required().trim().messages({
    'string.base': 'name should be a type of text',
    'string.empty': 'name cannot be an empty field',
    'any.required': 'name is a required field',
  }),
  price: Joi.number().required().min(0).messages({
    'number.base': 'price should be a type of number',
    'number.min': 'price must be greater than or equal to 0',
    'any.required': 'price is a required field',
  }),
});

export const validateCreateProduct = (req, res, next) => {
  const { error } = productSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
    return res.status(400).json({ errors: errorMessages });
  }
  next();
};
