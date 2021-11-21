import React from "react";
import { useFormik } from "formik";
// import { Link } from 'react-router-dom'
import * as Yup from "yup";
import { Container } from 'react-bootstrap'
import styledInstallment from './Installment.Module.css'



const initialValues = {
  bank: "",
  bankStatment: "",
  BVN: "",
  GII: "",
  GIIN: "",
  LOE: ""
};
const onSubmit = values =>{
  console.log('Form Data', values)
  }
 const validate = values =>{
    let errors = {}

    if(!values.bank){
      errors.bank ='Required'
    }
    if(!values.bankStatement){
      errors.bankStatement ='Required'
    }
    if(!values.BVN){
      errors.BVN ='Required'
    }
    else if(!/^[0-9\b]+$/i.test(values.BVN)){
      errors.BVN ='Please enter a valid BVN'
    }
    else if(values.BVN.length != 11){
      errors.BVN ='Please enter a valid BVN'
    }
    if(!values.GII){
      errors.GII ='Required'
    } 

    if(values.GIIN.length != 11 ){
      errors.GIIN ='Please enter a valid Government Issued Id Number'
    }

    if(!values.LOE){
      errors.LOE ='Required'
    }
    return errors
  }

// const onSubmit = (values) => {};

const validationSchema = Yup.object({
  bank: Yup.string().required("Required!"),
  bankStatement: Yup.string().required("Required!"),
  BVN: Yup.number().required("Required"),
  GII: Yup.string().required("Required!"),
  GIIN: Yup.string().required("Required!"),
  LOE: Yup.string().required("Required"),

});





function InstallmentForm() {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit, 
    validationSchema
})

  console.log("Form Visited", formik.touched);

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
        
         <form className="row g-3" onSubmit={formik.handleSubmit}>
                    <div className="mt-5">
                    {formik.touched.bank && formik.errors.bank ? <div className={styledInstallment.error}>{formik.errors.bank}</div> : null}
                        <label htmlFor="bank" className="form-label bank">Bank</label>
                        <select  onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.GIIN} className="form-select form-select" aria-label=".form-select-sm example">
                            <option value="Select Bank">Select Bank</option>
                            <option value="Access">Access</option>
                            <option value="GTB">GTB</option>
                            <option value="FCMB">FCMB</option>                         
                        </select>

                    </div>
                    
                    <div className="col-md-5">
                    {formik.touched.bankStatement && formik.errors.bankStatement ? <div className={styledInstallment.error}>{formik.errors.bankStatement}</div> : null}
                        <label htmlFor="bankStatement" className="form-label bankStatement">Bank Statement</label>
                        <input 
                        className="form-control" 
                        type="file" 
                        accept="application/pdf" 
                        id="bankStatement"
                        
                        onChange={formik.handleChange}
                        value={formik.values.bankStatement}
                        onBlur={formik.handleBlur}/>
                        <p></p>
                    </div>
                    

                    <div className="col-md-2">
                    
                    </div>

                    <div className="col-md-5">
                    {formik.touched.BVN && formik.errors.BVN ? <div className={styledInstallment.error}>{formik.errors.BVN}</div> : null}
                    <label htmlFor="BVN" className="form-label BVN" >BVN</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="BVN" 
                    
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.BVN}/>
                    </div>
                    

                    <div className="col-md-5">
                      {formik.touched.GII && formik.errors.GII ? <div className={styledInstallment.error}>{formik.errors.GII}</div> : null} 
                        <label htmlFor="GII" className="form-label GII" >Government Issued ID</label>
                        <input 
                        className="form-control" 
                        type="file" 
                        id="GovernmentID" 
                        
                        accept="application/pdf" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.GII}
                        />
                    </div>
                    

                     <div className="col-md-2">
                   
                    </div>

                    <div className="col-md-5">
                    {formik.touched.GIIN && formik.errors.GIIN ? <div className={styledInstallment.error}>{formik.errors.GIIN}</div> : null}
                    <label htmlFor="GIIN" className="form-label GIIN">Government Issued ID Number</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="GIIN"
                    
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.GIIN}/>
                    </div>
                    

                    <div className="col-md-5">
                    {formik.touched.LOE && formik.errors.LOE ? <div className={styledInstallment.error}>{formik.errors.LOE}</div> : null}
                        <label htmlFor="LOE" className="form-label LOE">Letter of Employment</label>
                        <input 
                        className="form-control" 
                        type="file"
                        accept="application/pdf"  
                        id="LOE"
                        
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.LOE}/>
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
