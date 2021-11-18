import React from "react";
import { useFormik } from "formik";
import { Link } from 'react-router-dom'
import * as Yup from "yup";
import RegisterCss from "./Register.module.css"

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

// const validate = values => {
//   let errors = {}
//    if (!values.Fullname){
//      errors.Fullname = "Required"
//    }
//    if (!values.PUsername){
//     errors.PUsername = "Required"
//   }
//   if (!values.email){
//     errors.email = "Required"
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
//     errors.email = 'Invalid email format'
//   }
//   if (!values.phone){
//     errors.phone = "Required"
//   }
//   if(!values.password){
//     errors.password = "Required"
//   }
//   if (!values.cPassword){
//     errors.cPassword = "Required"
//   }
//   if (!values.termsAndConditions){
//     errors.termsAndConditions = "Required"
//   }
//   return errors
// }

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
      <div className={RegisterCss.mainDiv}>
        <div className={RegisterCss.div1}>
          <div className={RegisterCss.pathFlex}>
            <Link to="/LogIn">
              <h3>Login</h3>
            </Link>
            <Link to="#">
              <h3>Register</h3>
            </Link>
          </div>
          <form className={RegisterCss.Register} onSubmit={formik.handleSubmit}>
           <div className={RegisterCss.regUser}>
           <i className="fas fa-user"></i>
            <input
              type="text"
              id="Fullname"
              placeholder="full name"
              {...formik.getFieldProps("Fullname")}
            />{" "}
            {formik.touched.Fullname && formik.errors.Fullname ? (
              <div className="error">{formik.errors.Fullname}</div>
            ) : null}
            </div>
            <div className={RegisterCss.puser}>
            <i className="fas fa-user"></i>
            <input
              type="text"
              id="PUsername"
              placeholder="preffered username"
              {...formik.getFieldProps("PUsername")}
            />
            {formik.touched.PUsername && formik.errors.PUsername ? (
              <div className={RegisterCss.error}>{formik.errors.PUsername}</div>
            ) : null} </div>
           
           <div className={RegisterCss.regmail}>
           <i class="fas fa-envelope"></i>
          <input
              type="text"
              id="email"
              placeholder="email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
             </div>
             <div className={RegisterCss.regPhone}>
             <i className="fas fa-phone-square-alt"></i>
            <input
              type="number"
              id="phone"
              placeholder="phone"
              {...formik.getFieldProps("phone")}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="error">{formik.errors.phone}</div>
            ) : null}
            </div>
            <div className={RegisterCss.regPwd}>
            <i className="fas fa-lock"></i>
            <input
              type="text"
              id="password"
              placeholder="password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
            </div>
            <div className={RegisterCss.regPwd}>
            <i className="fas fa-lock"></i>
            
            <input
              type="text"
              id="cPassword"
              placeholder="confirm password"
              {...formik.getFieldProps("cPassword")}
            />
            {formik.touched.cPassword && formik.errors.cPassword ? (
              <div className="error">{formik.errors.cPassword}</div>
            ) : null}
            </div>
         <div className={RegisterCss.checkBox}>
         <input type="checkbox" name="terms-and-conditions" id="terms-and-conditions" className="check-box-input" required/>
         <label for="terms-and-conditions">I have read, Understood and accept the terms and conditions</label>
        </div>

           
            <div className={RegisterCss.LinkToSignIn}>
              Have An Account? Click 
              <Link to="/LogIn">
                Here
                </Link> 
                To Sign In{" "}
            
            <button className={RegisterCss.button}>
                <span className={RegisterCss.reg}>Register</span>
                <i className="fas fa-sign-in-alt"></i>
              </button>
              </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Register;
