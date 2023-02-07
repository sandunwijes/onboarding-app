const Joi = require("joi");

const NAME = Joi.object({
  name: Joi.string().min(3).max(50).required(),
});

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const PHONE = Joi.object({
  phone: Joi.string()
    .regex(phoneRegExp)
    .messages({ "string.pattern.base": `Please enter valid phone number` })
    .required(),
});

const EMAIL = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
});

const validateName = (name) => {
  try {
    const value = NAME.validate({ name: name });
    return value;
  } catch (err) {}
};

const validateEmail = (email) => {
  try {
    const value = EMAIL.validate({ email: email });
    return value;
  } catch (err) {}
};

const validatePhone = (phone) => {
  try {
    const value = PHONE.validate({ phone: phone });
    return value;
  } catch (err) {}
};

export { validateName, validateEmail, validatePhone };
