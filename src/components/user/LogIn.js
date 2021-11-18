import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import loginCss from "./LogIn.module.css"


  const initialValues = {
    email: "",
    Password: "",
    rememberme: ""
  };
  const onSubmit = (values) => {};

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required!"),
    Password: Yup.string().required("Required!"),
    rememberme:Yup.string().required("Required!")
  });

  function LogIn() {
    const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema,
    });
    return (
      <React.Fragment>
        <div className={loginCss.mainDiv}>
          <div className={loginCss.div1}>
            <div className={loginCss.pathFlex}>
              
              <Link to="#">
                <h3>Login</h3>
              </Link>
              <Link to="./Register"> 
                <h3>Register</h3>
              </Link>
            </div>
            <form className={loginCss.Login} onSubmit={formik.handleSubmit}>
              <div className={loginCss.user}>
              <input type="text" id="email" placeholder="email"  {...formik.getFieldProps("email")}
            /> <i class="fa fa-envelope icon"></i>{" "}
            {formik.touched.email && formik.errors.email ? (
              <div className={loginCss.error}>{formik.errors.email}</div>
            ) : null} 
            </div> 

            <div className={loginCss.pwd}>
              <input type="password" id={loginCss.Password} placeholder="password"  {...formik.getFieldProps("Password")}
            /><i class="fa fa-lock icon"></i>{" "}
            {formik.touched.Password && formik.errors.Password ? (
              <div className={loginCss.error}>{formik.errors.Password}</div>
            ) : null}
            </div>
              <div className={loginCss.group}>
                <div className={loginCss.check}>
                  <input type="checkbox" name="rememberme" id={loginCss.rememberme} {...formik.getFieldProps("email")}
            />{" "}
            {formik.touched.rememberme && formik.errors.rememberme ? (
              <div classNameName={loginCss.error}>{formik.errors.rememberme}</div>
            ) : null}
                  <label for="rememberme">Remember Me</label>
                </div>
                 <Link to="#" className={loginCss.linking}>Forgot Password?</Link> 
              </div>
              {/* <div className="alt"> */}
              {/* <i class="fas fa-sign-in-alt"></i> */}
              <button className={loginCss.submit}>
                <span className={loginCss.sub}>Submit</span>
                <i className="fas fa-sign-in-alt"></i>
              </button>
              {/* <input type="submit" id="Login" value="Login" className="submit"/> */}
              {/* </div> */}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }


export default LogIn;
