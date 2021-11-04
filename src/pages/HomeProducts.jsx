import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'
// import Pagination from '@material-ui/lab'

const HomeProducts = ({ size = 4 }) => {
  return (
    <Container>
      <h1 className='text-center py-3'>Featured Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            {/* <Pagination count={2} /> */}
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default HomeProducts
