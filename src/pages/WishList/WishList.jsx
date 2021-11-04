import React from 'react'
import { Row, Col, Image, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import './src/index.css'
import styledWishList from './WishList.Module.css'
import Naira from 'react-naira'

const WishList = () => {
  return (
    <main className={styledWishList.wishBody}>
      <Container className='mb-3'>
        <div>
          <Link className='btn btn-Light my-3' to={'/'}>
            Home
          </Link>
          <p className='bread btn btn-Light my-3'>WishList</p>
        </div>
        <div>
          <h3>My WishList</h3>
        </div>
        <div className='card card-body mb-3 border-0 rounded'>
          <Row className={styledWishList.cardBody}>
            <Col md={2}>
              <Image
                className='img'
                src='../images/phone.jpg'
                alt='image'
                fluid
              />
            </Col>
            <Col md={3} className='mt-auto mb-auto'>
              <p className='mb-0'>iPhone 11 Pro 256GB Memory</p>
              <Naira>4000</Naira>
              <p>Availability: In Stock</p>
            </Col>
            <div>
              <i className={`fas fa-times ${styledWishList.wishIcon}`}></i>
            </div>
          </Row>
        </div>

        <div className='card card-body mb-3 border-0'>
          <Row className={styledWishList.cardBody}>
            <Col md={2}>
              <Image
                className='img'
                src='../images/phone.jpg'
                alt='image'
                fluid
              />
            </Col>
            <Col md={6} className='mt-auto mb-auto'>
              <p className='mb-0'>iPhone 11 Pro 256GB Memory</p>
              <Naira>4000</Naira>
              <p>Availability: In Stock</p>
            </Col>

            <div>
              <i className={`fas fa-times ${styledWishList.wishIcon}`}></i>
            </div>
          </Row>
        </div>

        <div className='card card-body mb-3 border-0'>
          <Row className={styledWishList.cardBody}>
            <Col md={2}>
              <Image
                className='img'
                src='../images/phone.jpg'
                alt='image'
                fluid
              />
            </Col>
            <Col md={6} className='mt-auto mb-auto'>
              <p className='mb-0'>iPhone 11 Pro 256GB Memory</p>
              <Naira>4000</Naira>
              <p>Availability: In Stock</p>
            </Col>

            <div className='rounded-circle'>
              <i className={`fas fa-times ${styledWishList.wishIcon}`}></i>
            </div>
          </Row>
        </div>

        <div className='form-check pt-4 pb-4'>
          <input
            className='form-check-input'
            type='checkbox'
            value=''
            id='flexCheckDefault'
          />
          <label className='form-check-label' for='flexCheckDefault'>
            Inform me when item from my wishlist is Available
          </label>
        </div>
      </Container>
    </main>
  )
}

export default WishList
