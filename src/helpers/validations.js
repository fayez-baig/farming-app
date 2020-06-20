import * as yup from "yup";
import { setIn } from "final-form";

export const signupSchema = yup.object({
  firstName: yup.string().required().min(3),
  lastName: yup.string().required().min(3),
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  address: yup.string().required().min(3),
  state: yup.string().required().min(2),
  city: yup.string().required().min(2),
  phone: yup.string().required().min(10),
  pin: yup.number().required().min(6),
});

export const validateSignup = (schema) => async (values) => {
  if (typeof schema === "function") schema = schema();

  try {
    await schema.validate(values, { abortEarly: false });
  } catch (e) {
    return e.inner.reduce((errors, error) => {
      return setIn(errors, error.path, error.message);
    }, {});
  }
};
