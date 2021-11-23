import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Row, Col, Container, Form, Button, Image } from 'react-bootstrap'
import CheckOut from './CheckOut.Module.css'
import Naira from 'react-naira'

const initialValues = {
    firstName: '',
    lastName: '',
    country: '',
    streetAddress: '',
    town: '',
    state1: '',
    phone: '',
    email: '',
    checkbox1: '',
    address: '',
    username: '',
    password: '',
    checkbox2: '',
    city: '',
    state2: '',
    orderNotes: ''
}

const onSubmit = values => {
    console.log('Form data', values)
}

const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('Required!'),
        lastName: Yup.string().required('Required!'),
        country: Yup.string().required('Please Select A Country!'),
        streetAddress: Yup.string().required('Required!'),
        town: Yup.string().required('Required!'),
        state1: Yup.string().required('Please Select A State!'),
        phone: Yup.string().required("Required!"),
        email: Yup.string().email('Invalid email address').required('Required!'),
        address: Yup.string().required('Required!'),
        username: Yup.string().required('Required!'),
        password: Yup.string().required('Required!'),
        city: Yup.string().required('Required!')
    })

const CheckOutPage = () => {
    const [showInputForm, setShowInputForm] = useState(false);
    const [showAddress, setShowAddress] = useState(false);
   

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    // console.log('Form errors', formik.errors)

    return (
        <Container>
            <div>
                <p className='my-5 text-center'>Have a coupon?
                    <span className='font-weight-bold'> Click here to enter your code</span>
                </p>
            </div>
            
                
                <Form onSubmit={formik.handleSubmit}>
                    <Row>
                    <Col className="col-lg-8 col-12">
                        <Row className="mb-4">
                            <Form.Group as={Col}>
                                <Form.Label className= {CheckOut.formLabel}>First Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    className={CheckOut.inputForm}
                                    id="firstName"
                                    {...formik.getFieldProps('firstName')}
                                />
                                {formik.touched.firstName && formik.errors.firstName ? <div className={CheckOut.errors}>{formik.errors.firstName}</div> : null}
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label className= {CheckOut.formLabel}>Last Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    className={CheckOut.inputForm}
                                    id="lastName"
                                    {...formik.getFieldProps('lastName')}
                                />
                                {formik.touched.lastName && formik.errors.lastName ? <div className={CheckOut.errors}>{formik.errors.lastName}</div> : null}
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-4">
                            <Form.Label className= {CheckOut.formLabel}>Country</Form.Label>
                            <Form.Select defaultValue="Select Country" id="country" className={CheckOut.selectForm} {...formik.getFieldProps('country')}>
                                <option value="Select Country">Select Country</option>
                                <option value="Nigeria">Abia</option>
                                
                            </Form.Select>
                                {formik.touched.country && formik.errors.country ? <div className={CheckOut.errors}>{formik.errors.country}</div> : null}
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label className= {CheckOut.formLabel}>Street Address</Form.Label>
                            <Form.Control 
                                type="text"
                                className={`mb-1 ${CheckOut.inputForm}`} 
                                id="streetAddress"
                                {...formik.getFieldProps('streetAddress')}
                                />
                                {formik.touched.streetAddress && formik.errors.streetAddress ? <div className={CheckOut.errors}>{formik.errors.streetAddress}</div> : null}
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label className= {CheckOut.formLabel}>Town/City</Form.Label>
                            <Form.Control 
                                type="text" 
                                className={CheckOut.inputForm} 
                                id="town"
                                {...formik.getFieldProps('town')}
                                />
                                {formik.touched.town && formik.errors.town ? <div className={CheckOut.errors}>{formik.errors.town}</div> : null}
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label className= {CheckOut.formLabel}>State</Form.Label>
                            <Form.Select defaultValue="Select State" id="state1" className={CheckOut.selectForm} {...formik.getFieldProps('state1')}>
                                <option value="Select State">Select State</option>
                                <option value="Abia">Abia</option>
                                <option value="Akwa-Ibom">Akwa-Ibom</option>
                            </Form.Select>
                            {formik.touched.state1 && formik.errors.state1 ? <div className={CheckOut.errors}>{formik.errors.state1}</div> : null}
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label className= {CheckOut.formLabel}>Phone</Form.Label>
                            <Form.Control 
                                type="phone" 
                                className={CheckOut.inputForm}
                                id="phone"
                                {...formik.getFieldProps('phone')}
                                />
                                {formik.touched.phone && formik.errors.phone ? <div className={CheckOut.errors}>{formik.errors.phone}</div> : null}
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label className= {CheckOut.formLabel}>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                className={CheckOut.inputForm}
                                id="email"
                                {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email ? <div className={CheckOut.errors}>{formik.errors.email}</div> : null}
                        </Form.Group>

                        <Form.Group className="mb-4" id="formGridCheckbox">
                            <Form.Check 
                                type="checkbox" 
                                label="Create An Account?"
                                className={CheckOut.checkbox}
                                name="checkbox1"
                                onClick={()=>setShowInputForm(!showInputForm)}
                            />
                        </Form.Group>


                        {showInputForm ? 

                        <Row className="mb-4 newAccount">
                            <Form.Group as={Col}>
                                <Form.Label className= {CheckOut.formLabel}>Username</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    className={CheckOut.inputForm} 
                                    id="username"
                                    {...formik.getFieldProps('username')}
                                />
                                {formik.touched.username && formik.errors.username ? <div className={CheckOut.errors}>{formik.errors.username}</div> : null}
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label className= {CheckOut.formLabel}>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    className={CheckOut.inputForm} 
                                    id="password"
                                    {...formik.getFieldProps('password')}
                                />
                                {formik.touched.password && formik.errors.password ? <div className={CheckOut.errors}>{formik.errors.password}</div> : null}
                            </Form.Group>

                        </Row>
                        : null}

                        <Form.Group className="mb-4 checkbox2" id="formGridCheckbox">
                            <Form.Check 
                                type="checkbox" 
                                label="Ship To Another?" 
                                className={CheckOut.formCheck}
                                name="checkbox2"
                                onClick={()=>setShowAddress(!showAddress)}
                            />
                        </Form.Group>
                        
                        {showAddress ? 
                        <Col>
                        <Form.Group className="mb-4">
                            <Form.Label className= {CheckOut.formLabel}>Street Address</Form.Label>
                            <Form.Control 
                                type="text"
                                className={`mb-1 ${CheckOut.inputForm}`} 
                                id="address"
                                {...formik.getFieldProps('address')}
                                />
                                {formik.touched.address && formik.errors.address ? <div className={CheckOut.errors}>{formik.errors.address}</div> : null}
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label className= {CheckOut.formLabel}>Town/City</Form.Label>
                            <Form.Control 
                                type="text" 
                                className={CheckOut.inputForm} 
                                id="city"
                                {...formik.getFieldProps('city')}
                                />
                                {formik.touched.city && formik.errors.city ? <div className={CheckOut.errors}>{formik.errors.city}</div> : null}
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formGridState2">
                            <Form.Label className= {CheckOut.formLabel}>State</Form.Label>
                            <Form.Select defaultValue="Select State" name="state" className={CheckOut.selectForm}>
                                <option value="Select State">Select State</option>
                                <option value="Abia">Abia</option>
                                <option value="Akwa-Ibom">Akwa-Ibom</option>
                            </Form.Select>
                        </Form.Group>
                        </Col>
                        : null}

                        <Form.Group className="mb-3" controlId="formGridNote">
                            <Form.Label>Order Notes (Optional)</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Note About Your Order (Special Notes For Delivery)." 
                                className={CheckOut.inputForm} 
                                name="orderNotes"
                            />
                        </Form.Group>

                    
                </Col>
                
                <Col className={`px-5 py-4 col-lg-4 col-12 ${CheckOut.details}`}>
                <div>
                    <Row className="mb-3">
                        <Col className="mt-2">
                            <h4 className="text-capitalize">Products</h4>
                            <p>Product A x 2</p>
                            <p>Tax</p>
                            <p>Shipping</p>
                            <p className={CheckOut.check}>Total</p>
                        </Col>
                        <Col className="mt-2">
                            <h4 className="text-capitalize">Sub-Total</h4>
                            <div className="ml-5">
                                <p><Naira>2000</Naira></p>
                                <p>₦100</p>
                                <p>₦500</p> 
                                <p><strong>₦2600</strong></p>
                            </div>
                            
                        </Col>
                    </Row>

                    <Row className="mb-5">
                        <Image src="../images/payment.png" />
                    </Row>

                    <Row>
                        <p>
                        Your personal data will be used to process your order, 
                        support your experience throughout this website, 
                        and for other purposes described in our <strong>privacy policy.</strong>
                        </p>
                    </Row>

                    <Row className={`my-3 ${CheckOut.buttonRow}`}>
                        <Button className={CheckOut.button} type="submit">
                            Place Orders
                        </Button>
                    </Row>
                    
                </div>

                </Col>
                </Row>
                </Form>
            
            
        </Container>
    )
}

export default CheckOutPage
