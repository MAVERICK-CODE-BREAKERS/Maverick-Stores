import React from "react";
import { useFormik } from "formik";
import { Link } from 'react-router-dom'
import * as Yup from "yup";
import "./Register.css";

const initialValues = {
  Fullname: "",
  PUsername: "",
  email: "",
  phone: "",
  password: "",
  cPassword: "",
  termsAndConditions: "",
};

const onSubmit = (values) => {};

const validationSchema = Yup.object({
  Fullname: Yup.string().required("Required!"),
  PUsername: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format").required("Required!"),
  phone: Yup.string().required("Required!"),
  password: Yup.string().required("Required!"),
  cPassword: Yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    ),
  }),
  termsAndConditions: Yup.string().required("Required!"),
});



function Register() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    // validate
  });

  console.log("Form errors", formik.errors);

  return (
    <React.Fragment>
      <div className="main-div">
        <div className="div-1">
          <div className="Path-flex">
            <Link to="/LogIn">
              <h3>Login</h3>
            </Link>
            <Link to="#">
              <h3>Register</h3>
            </Link>
          </div>
          <form className="Register" onSubmit={formik.handleSubmit}>
            <input
              type="text"
              id="Fullname"
              placeholder="Full name"
              {...formik.getFieldProps("Fullname")}
            />{" "}
            {formik.touched.Fullname && formik.errors.Fullname ? (
              <div className="error">{formik.errors.Fullname}</div>
            ) : null}
            <input
              type="text"
              id="PUsername"
              placeholder="preffered username"
              {...formik.getFieldProps("PUsername")}
            />
            {formik.touched.PUsername && formik.errors.PUsername ? (
              <div className="error">{formik.errors.PUsername}</div>
            ) : null}
            <input
              type="text"
              id="email"
              placeholder="username/email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
            <input
              type="number"
              id="phone"
              placeholder="phone"
              {...formik.getFieldProps("phone")}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="error">{formik.errors.phone}</div>
            ) : null}
            <input
              type="text"
              id="password"
              placeholder="password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
            <input
              type="text"
              id="cPassword"
              placeholder="confirm password"
              {...formik.getFieldProps("cPassword")}
            />
            {formik.touched.cPassword && formik.errors.cPassword ? (
              <div className="error">{formik.errors.cPassword}</div>
            ) : null}
            <input
              type="checkbox"
              name="terms-and-conditions"
              id="termsAndConditions"
              {...formik.getFieldProps("termsAndConditions")}
            />
            {formik.touched.termsAndConditions &&
            formik.errors.termsAndConditions ? (
              <div className="error">{formik.errors.termsAndConditions}</div>
            ) : null}
            <label htmlFor="terms-and-conditions">
              I have read, Understood and accept the terms and conditions
            </label>
            <div className="LinkToSignIn">
              Have An Account? Click 
              {/* <a href="#"> */}
                Here
                {/* </a>  */}
                To Sign In{" "}
            </div>
            <input type="submit" id="Register" value="Register" />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Register;
