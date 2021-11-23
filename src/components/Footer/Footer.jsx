import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FooterContainer } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <div className='footer-middle mt-5'>
        <Container>
          <Row className='mb-3'>
            {/* Contact us Column */}
            <Col sm={12} md={6} lg={4} xl={3}>
              <h4 className='header'>Contact Us:</h4>
              <ul className='list-unstyled'>
                <li>
                  <i className='fa fa-home me-3'></i>28B,Unity St, Ikeja
                </li>
                <li>
                  <i className='fa fa-envelope me-3' id='envelope'></i>
                  info@mds.com
                </li>
                <li>
                  <i className='fa fa-phone me-3'></i>08033445566
                </li>
              </ul>
            </Col>
            {/* Useful Links */}
            <Col sm={12} md={6} lg={4} xl={3}>
              <h4 className='header'>Useful Links:</h4>
              <ul className=' col list-unstyled'>
                <li>
                  <Link
                    to='/'
                    style={{
                      textDecoration: 'none',
                      color: 'rgb(172, 172, 172)',
                    }}
                  >
                    <i className='far fa-greater-than me-2'></i>Home
                  </Link>
                </li>
                <li>
                  <Link
                    to='/'
                    style={{
                      textDecoration: 'none',
                      color: 'rgb(172, 172, 172)',
                    }}
                  >
                    <i className='far fa-greater-than me-2'></i>About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to='/products'
                    style={{
                      textDecoration: 'none',
                      color: 'rgb(172, 172, 172)',
                    }}
                  >
                    <i className='far fa-greater-than me-2'></i>Products
                  </Link>
                </li>
                <li>
                  <Link
                    to='/'
                    style={{
                      textDecoration: 'none',
                      color: 'rgb(172, 172, 172)',
                    }}
                  >
                    <i className='far fa-greater-than me-2'></i>Wishlist
                  </Link>
                </li>
                <li>
                  <Link
                    to='/cart'
                    style={{
                      textDecoration: 'none',
                      color: 'rgb(172, 172, 172)',
                    }}
                  >
                    <i className='far fa-greater-than me-2'></i>Cart
                  </Link>
                </li>
              </ul>
            </Col>
            {/* Social media Column */}
            <Col sm={12} md={6} lg={4} xl={3}>
              <h4 className='header'>Socail Media:</h4>
              <ul className='list-unstyled' style={{ display: 'flex' }}>
                <li>
                  <Link
                    to='#'
                    style={{
                      textDecoration: 'none',
                      color: 'rgb(172, 172, 172)',
                    }}
                  >
                    <i
                      className='fab fa-twitter me-3'
                      style={{ fontSize: '3rem' }}
                    ></i>
                  </Link>
                </li>
                <li>
                  <Link
                    to='#'
                    style={{
                      textDecoration: 'none',
                      color: 'rgb(172, 172, 172)',
                    }}
                  >
                    <i
                      className='fab fa-facebook me-3'
                      style={{ fontSize: '3rem' }}
                    ></i>
                  </Link>
                </li>
                <li>
                  <Link
                    to='#'
                    style={{
                      textDecoration: 'none',
                      color: 'rgb(172, 172, 172)',
                    }}
                  >
                    <i
                      className='fab fa-instagram me-3'
                      style={{ fontSize: '3rem' }}
                    ></i>
                  </Link>
                </li>
              </ul>
            </Col>
            {/* Newsletter Column */}
            <Col sm={12} md={6} lg={4} xl={3}>
              <p className='mt-4'>
                Subscribe To Our Newsletter To Stay Up-To-Date With Latest
                Products.
              </p>

              <form className='form-inline'>
                <div className='col-auto'>
                  <div className='input-group mb-2'>
                    <input
                      type='email'
                      className='form-control'
                      id='inlineFormInputGroup'
                      placeholder='Email'
                    />
                    <div
                      className='input-group-prepend'
                      style={{ cursor: 'pointer' }}
                    >
                      <div
                        className='input-group-text'
                        style={{ background: '#2cccff', color: 'white' }}
                      >
                        Submit
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </Col>
          </Row>

          {/* Footer Bottom */}
          <Row className='footer-bottom border-top'>
            <p className='text-center '>
              {/* <hr /> */}
              Copyright &copy;{new Date().getFullYear()} MDS. All Rights
              Reserved.
            </p>
          </Row>
        </Container>
      </div>
    </FooterContainer>
  )
}

export default Footer
