import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styledCart from './Cart.Module.css'

const CartPage = () => {
  return (
    <Container>
      <div className={styledCart.cartDiv}>
        {/* <h1>Cart</h1> */}
        <div className={styledCart.tabDiv}>
          <table className={styledCart.cartTable}>
            <tbody>
              <tr></tr>
            </tbody>
            <thead style={{ borderBottom: '2px solid black' }}>
              <tr>
                <td />
                <td>
                  <strong>Product</strong>
                </td>
                <td />
                <td>
                  {' '}
                  <strong> Price</strong>{' '}
                </td>
                <td>
                  {' '}
                  <strong>Quntity</strong>{' '}
                </td>
                <td>
                  {' '}
                  <strong>Sub-Total</strong>{' '}
                </td>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid black' }}>
                <td>x</td>
                <td>
                  {' '}
                  <img
                    src='../images/ash background.jpg'
                    width='80px'
                    height='80px'
                    alt='ash'
                    style={{ borderRadius: 18, background: '#e5e5e5' }}
                  />
                </td>
                <td>Product A </td>
                <td>
                  <span>₦</span> 4,000
                </td>
                <td>
                  <button className={styledCart.tabBtn}>
                    <span >-</span>
                    <input
                      type='text'
                      defaultValue={1}
                      id='inputNumber'
                      className={styledCart.quan}
                    />
                    <span>+</span>
                  </button>
                </td>
                <td>
                  <span>₦</span> 4,000
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid black' }}>
                <td>x</td>
                <td>
                  {' '}
                  <img
                    src='../images/ash background.jpg'
                    width='80px'
                    height='80px'
                    alt='ash'
                    style={{ borderRadius: 18, background: '#e5e5e5' }}
                  />{' '}
                </td>
                <td>Product A </td>
                <td>
                  <span>₦</span> 4,000
                </td>
                <td>
                  <button className={styledCart.tabBtn}>
                    <span >-</span>
                    <input
                      type='text'
                      defaultValue={1}
                      className={styledCart.quan}
                    />
                    <span >+</span>
                  </button>
                </td>
                <td>
                  <span>₦</span> 4,000
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid black' }}>
                <td>x</td>
                <td>
                  {' '}
                  <img
                    src='../images/ash background.jpg'
                    width='80px'
                    height='80px'
                    alt='ash'
                    style={{ borderRadius: 18, background: '#e5e5e5' }}
                  />{' '}
                </td>
                <td>Product A </td>
                <td>
                  <span>₦</span> 4,000
                </td>
                <td>
                  <button className={styledCart.tabBtn}>
                    <span>-</span>
                    <input
                      type='text'
                      defaultValue={1}
                      className={styledCart.quan}
                    />
                    <span >+</span>
                  </button>
                </td>
                <td>
                  <span>₦</span> 4,000
                </td>
              </tr>
            </tbody>
          </table>{' '}
          <br />
          <div className={styledCart.btn}>
            <button className={styledCart.whiteBtn}>Have A Coupon Code? </button>
            <button className={`${styledCart.blueBtn} ${styledCart.blue2}`} >
              Apply Coupon{' '}
            </button>
            <button className={styledCart.ashBtn}>Update Cart</button>
          </div>
        </div>

        <div>
          <div className={styledCart.total}>
            <br />
            <h4>Cart Totals</h4> <br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>Subtotal</strong> <span>₦ 12,000</span>{' '}
            </div>{' '}
            <hr />
            <strong>Shipping</strong> <br />
            Flat Rate: <span>₦</span>1,000 <br />
            Shipping to <strong>21 MDS Estate, Abuja</strong> <br />
            <Link to='#' style={{ textDecoration: 'none' }}>
              Change Address
            </Link>{' '}
            <br />
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>Total</strong>{' '}
              <strong>
                {' '}
                <span>₦</span>13,000{' '}
              </strong>
            </div>{' '}
            <br />
            <button className={`${styledCart.blueBtn} {styledCart.blue1}`}>
              Proceed to Checkout
            </button>
          </div>
          <br />
          <br />
          <button className={styledCart.blueBtn}>Continue Shopping </button>
        </div>
      </div>
    </Container>
  )
}

export default CartPage
