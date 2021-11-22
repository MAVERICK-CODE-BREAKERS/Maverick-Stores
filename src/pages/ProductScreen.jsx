import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Form,
  Container,
} from 'react-bootstrap'
import Rating from '../components/Rating'
import Naira from 'react-naira'
import '../index.css'
import {
  listProductDetails,
  listProducts,
} from '../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Product from '../components/Product'

const ProductScreen = ({ history, match }) => {
  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()
  const productDetails = useSelector((state) => state.productDetails)
  const relatedProductList = useSelector((state) => state.productList)
  const { loading, error, product } = productDetails
  const { products } = relatedProductList

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match.params.id])

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?quantity=${quantity}`)
  }

  return (
    <Container>
      <div>
        <Link className='btn btn-Light my-3' to={'/'}>
          Home
        </Link>
        <p className='bread btn btn-Light my-3'>{product.title}</p>
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image
              className='img'
              src={product.image}
              alt={product.name}
              fluid
              style={{ height: '70vh' }}
            />
          </Col>
          <Col md={5}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.title}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                Price: <Naira>{product.price}</Naira>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                // value={product.rating.rate}
                // text={`${product.rating.count} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Stock:</Col>
                  <Col>
                    <strong>
                      {`${
                        product.countInStock > 0
                          ? `In Stock (${product.countInStock})`
                          : `Out of Stock. Available on Back-order`
                      }`}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Quantity</Col>
                    <Col>
                      <Form.Control
                        as='select'
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      >
                        {/* value must not exceed the items in stock */}
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                <Button
                  onClick={addToCartHandler}
                  className='cartBtn btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
                <Button
                  className='cartBtn btn-block ms-3'
                  type='button'
                  hidden={product.countInStock > 0}
                >
                  Notify Me
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
      <h3 className='text-center mt-5'>Related Products</h3>
      <Row>
        {products
          .filter((rel) => rel.category === product.category)
          .map(
            (relatedProducts) =>
              product.id !== relatedProducts.id && (
                <Col key={relatedProducts._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={relatedProducts} />
                </Col>
              )
          )}
      </Row>
    </Container>
  )
}

export default ProductScreen
