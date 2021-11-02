import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import Naira from 'react-naira'
import '../index.css'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <div className='prod'>
        <Card.Img className='img' src={product.image} variant='top' />
        <Link to={'/cart'}>
          <i className='fas fa-shopping-cart' />
        </Link>
      </div>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
      </Card.Body>

      <Card.Text as='div'>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
      </Card.Text>

      <Card.Text as='h3'>
        <Naira>{product.price}</Naira>
      </Card.Text>
    </Card>
  )
}

export default Product
