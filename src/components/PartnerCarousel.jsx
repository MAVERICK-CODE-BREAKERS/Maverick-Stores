import React from 'react'
import { Carousel } from 'react-bootstrap'
import partner1 from './../assets/slides/partners.png'
import partner2 from './../assets/slides/partner-2.png'

const PartnerCarousel = () => {
  return (
    <div className='mt-5 mb-3'>
      <h3 className='text-center'>Our partners</h3>

      <Carousel fade controls={false} pause={false} indicators={false}>
        <Carousel.Item interval={3000}>
          <img className='d-block w-100' src={partner1} alt='First partner' />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className='d-block w-100' src={partner2} alt='Second partner' />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default PartnerCarousel
