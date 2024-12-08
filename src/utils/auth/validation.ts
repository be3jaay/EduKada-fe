import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
  .email()
  .required("Email is required")
  .default(""),
  password: Yup.string()
  .min(8, "Must be at least 8 characters")
  .required("Password is required")
  .default(""),
})

export const registerSchema = Yup.object().shape({
  firstName: Yup.string()
  .required("First Name is required")
  .default(""),
  lastName: Yup.string()
  .required("Last Name is required")
  .default(""),
  email: Yup.string()
  .email()
  .required("Email is required")
  .default(""),
  password: Yup.string()
  .min(8, "Must be at least 8 characters")
  .required("Password is required")
  .default(""),
  confirmPassword: Yup.string()
  .test("passwords-match", "Passwords must match", function(value) {
    return this.parent.password === value
  })

})

export type loginType = Yup.InferType<typeof loginSchema>
export type registerType = Yup.InferType<typeof registerSchema>

