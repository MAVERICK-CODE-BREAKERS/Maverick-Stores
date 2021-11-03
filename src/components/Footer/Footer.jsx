import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FooterContainer } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <div className='footer-middle'>
        <Container>
          <Row>
            {/* Contact us Column */}
            <Col className='col-md-3 col-sm-6 mt-3'>
              <h4 className='header'>Contact Us:</h4>
              <ul className='list-unstyled'>
                <li>
                  <i className='fa fa-home me-3'></i>28B,Unity Crescent, Ikeja
                  GRA,Lagos
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
            <Col className='col-md-3 col-sm-6 mt-3'>
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
                    Home
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
                    About Us
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
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to='/wishlist'
                    style={{
                      textDecoration: 'none',
                      color: 'rgb(172, 172, 172)',
                    }}
                  >
                    Wishlist
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
                    Cart
                  </Link>
                </li>
              </ul>
            </Col>
            {/* Social media Column */}
            <Col className='col-md-3 col-sm-6 mt-3'>
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
            <Col className='col-md-3 col-sm-6 mt-3'>
              <p>
                Subscribe To Our Newsletter To Stay Up-To-Date With Latest
                Products.
              </p>

              <input
                type='text'
                className='form-control'
                id='inlineFormInputGroupUsername'
                placeholder='Email'
              />
              {/* <i className='fa fa-envelope'></i> */}
            </Col>
          </Row>

          {/* Footer Bottom */}
          <Row className='footer-bottom'>
            <p className='text-center'>
              <hr />
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
