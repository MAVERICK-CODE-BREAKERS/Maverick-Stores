import React from 'react'
import { Container } from 'react-bootstrap'
import ad from './../assets/slides/ad.jpg'

const Advert = () => {
  return (
    <Container>
      <img src={ad} className='d-block w-100' alt='img-responsive'></img>
    </Container>
  )
}

export default Advert
