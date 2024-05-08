import * as Yup from "yup";
export const registerValidateSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .max(30, "first name must be at max 30 characters")
    .required("first name must be required"),
  lastName: Yup.string()
    .trim()
    .max(30, "lastname must be at max 30 characters")
    .required("last name must be required"),
  email: Yup.string()
    .email("must be a valid email")
    .required("email is required")
    .max(65, "email must be at max 65 characters")
    .trim()
    .lowercase(),
  password: Yup.string()
    .min(6, "password must be at least 6 character")
    .max(20, "password must be at max 20 character")
    .required("password must be required"),
  role: Yup.string()
    .required("role must be required")
    .trim()
    .oneOf(["buyer", "seller"], "role must be either buyer or seller"),
  gender: Yup.string()
    .trim()
    .oneOf(
      ["male", "female", "preferNotToSay"],
      "gender must be either male or female or preferNotToSay"
    ),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .required("email must be required")
    .email("must be a valid email")
    .lowercase()
    .trim(),
  password: Yup.string().required("password must be required"),
});
