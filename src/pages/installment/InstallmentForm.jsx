import React from "react";
import { useFormik } from "formik";
// import { Link } from 'react-router-dom'
import * as Yup from "yup";
import { Container } from 'react-bootstrap'
import styledInstallment from './Installment.Module.css'

const initialValues = {
  Bank: "",
  BankStatment: "",
  BVN: "",
  GII: "",
  GIIN: "",
  LOE: ""
};

const onSubmit = (values) => {};

const validationSchema = Yup.object({
  Bank: Yup.string().required("Required!"),
  BankStatment: Yup.string().required("Required!"),
  BVN: Yup.string().required("Invalid BVN format"),
  GII: Yup.string().required("Required!"),
  GIIN: Yup.string().required("Required!"),
  LOE: Yup.string().required("Required"),

});



function InstallmentForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    // validate
  });

  console.log("Form errors", formik.errors);

  return (
    <React.Fragment>
      <main className={styledInstallment.installmentFormBody}>
      <Container >
      <h3 className='py-3 text-dark '>
        <b className={styledInstallment.red}>Required Documents are:</b>
      </h3>
        <ul>
          <li>6 months statement of account, BVN</li>
          <li>Work ID, Letter of Employment</li>
          <li>Government Issued ID and ID number</li>
        </ul>
        
         <form className="row g-3">
                    <div className="mt-5">
                     
                        <label htmlFor="inputEmail4" className="form-label">Bank</label>
                        <select defaultValue=""className="form-select form-select" aria-label=".form-select-sm example">
                            <option value>Select Bank</option>
                            <option value="1">Access</option>
                            <option value="2">GTB</option>
                            <option value="3">FCMB</option>
                        </select>
                    </div>
                    
                    <div className="col-md-5">
                        <label htmlFor="formFile" className="form-label">Bank Statement</label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-md-2">
                    
                    </div>

                    <div className="col-md-5">
                    <label htmlFor="inputPassword4" className="form-label">BVN</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="bvn" />
                    </div>

                    <div className="col-md-5">
                        <label htmlFor="formFile" className="form-label">Government Issued ID</label>
                        <input 
                        className="form-control" 
                        type="file" 
                        id="GovernmentID" />
                    </div>

                     <div className="col-md-2">
                   
                    </div>

                    <div className="col-md-5">
                    <label htmlFor="inputPassword4" className="form-label">Government Issued ID Number</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="IDNumber" />
                    </div>

                    <div className="col-md-5">
                        <label htmlFor="formFile" className="form-label">Letter of Employment</label>
                        <input 
                        className="form-control" 
                        type="file" 
                        id="Employment" />
                    </div>
                    
                    <div className="col-12 mt-5">
                    <button 
                    type="submit"
                    className="btn btn-info">SUBMIT</button>
                    </div>
                    
                </form>
                
       
      </Container>
      </main>
    </React.Fragment>
  );
}

export default InstallmentForm
