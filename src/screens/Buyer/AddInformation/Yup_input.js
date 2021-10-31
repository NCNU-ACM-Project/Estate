import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short !")
    .max(70, "Too Long !")
    .required("Required"),
  level:Yup.string()
    .required("Required"),
  city:Yup.string()
    .required("Required"),
  buyer:Yup.string()
    .required("Required"),
  look:Yup.string()
    .required("Required")
});

export default SignupSchema;
