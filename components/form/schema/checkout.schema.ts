import * as yup from "yup";

export const checkoutFormSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  email: yup
    .string()
    .email("Enter a vaild email address")
    .required("E-mail address is required"),
  deliveryAddress: yup.string().required("Delivery Address is required"),
});
