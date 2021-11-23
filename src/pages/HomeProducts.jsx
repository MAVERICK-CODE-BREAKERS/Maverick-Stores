import React, { useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Product from '../components/Product'
// import products from '../products'
import { listProducts } from '../redux/actions/productActions'
// import Pagination from '@material-ui/lab'

const HomeProducts = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <Container>
      <h1 className='text-center py-3'>Featured Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              {/* <Pagination count={2} /> */}
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  )
}

export default HomeProducts
