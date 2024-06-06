import * as yup from "yup";

export const signInSchema = yup
  .object({
    password: yup.string().required("password is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
  })
  .required();

export const signUpSchema = yup
  .object({
    username: yup.string().required("username is required"),
    password: yup.string().required("password is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
  })
  .required();

export const addProductSchema = yup
  .object({
    title: yup.string().required("title is required"),
    description: yup.string().required("description is required"),
    price: yup.string().required("price is required"),
    brand: yup.string().required("brand is required"),
    currency: yup.string().required("currency is required"),
    // image: yup.string().required("image is required"),
    // image: yup
    //   .mixed()
    //   .test("file-required", "image is required", (value: any): boolean => {
    //     return !!value && value.length && value[0] instanceof File;
    //   })
    //   .test("is-valid-type", "not valid format", (value: any): boolean => {
    //     if (value && value.length && value[0] instanceof File) {
    //       const fileExtension = value[0].name.split(".").pop()?.toLowerCase();
    //       return ["jpg", "jpeg", "png", "webp", "avif"].includes(
    //         fileExtension as string
    //       );
    //     }
    //     return true;
    //   }),
  })