import React from 'react'
import { Carousel, Button } from 'react-bootstrap'
import image1 from './../assets/slides/hero-image.png'
import image2 from './../assets/slides/hero_two.png'
import image3 from './../assets/slides/hero_three.png'
import image4 from './../assets/slides/hero_four.png'

import caro from './Carousel.Module.css'
import { Link } from 'react-router-dom'

const CarouselContainer = () => {
  return (
    <Carousel fade controls={false} pause={false}>
      <Carousel.Item interval={2000}>
        <img className='d-block w-100' src={image1} alt='First slide' />
        <Carousel.Caption className={caro.caption}>
          <h3 className={caro.welcome}>WELCOME TO</h3>
          <h1 className={caro.mav}>MAVERICK DIGITAL STORES</h1>
          <p className={caro.desc}>
            <span>
              Your best online digital store where you get <br /> everything you
              need.......
            </span>
          </p>
          <Link to='#'>
            <Button className={caro.shopBtn}>Shop Now</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className='d-block w-100' src={image2} alt='Second slide' />

        <Carousel.Caption className={caro.caption}>
          <h3 className={caro.welcome}>WELCOME TO</h3>
          <h1 className={caro.mav}>MAVERICK DIGITAL STORES</h1>
          <p className={caro.desc}>
            <span>
              Your best online digital store where you get <br /> everything you
              need.......
            </span>
          </p>
          <Link to='#'>
            <Button className={caro.shopBtn}>Shop Now</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className='d-block w-100' src={image3} alt='Third slide' />

        <Carousel.Caption className={caro.caption}>
          <h3 className={caro.welcome}>WELCOME TO</h3>
          <h1 className={caro.mav}>MAVERICK DIGITAL STORES</h1>
          <p className={caro.desc}>
            <span>
              Your best online digital store where you get <br /> everything you
              need.......
            </span>
          </p>
          <Link to='#'>
            <Button className={caro.shopBtn}>Shop Now</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className='d-block w-100' src={image4} alt='Fourth slide' />
        <Carousel.Caption className={caro.caption}>
          <h3 className={caro.welcome}>WELCOME TO</h3>
          <h1 className={caro.mav}>MAVERICK DIGITAL STORES</h1>
          <p className={caro.desc}>
            <span>
              Your best online digital store where you get <br /> everything you
              need.......
            </span>
          </p>
          <Link to='#'>
            <Button className={caro.shopBtn}>Shop Now</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer
