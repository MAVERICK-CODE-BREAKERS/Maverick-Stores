import React from 'react'
import { Container } from 'react-bootstrap'
 import  StylePage from './Cart.css'

const CartPage = () => {
  return (
    <Container>
      <div id="cart-div">
        {/* <h1>Cart</h1> */} 
        <div id="tab-div">
            <table id="cart-table">
                <tbody><tr>
                </tr></tbody><thead style={{borderBottom: '2px solid black'}}>
                <tr><td />
                    <td><strong>Product</strong></td>
                    <td />
                    <td> <strong> Price</strong> </td>
                    <td> <strong>Quntity</strong> </td>
                    <td> <strong>Sub-Total</strong> </td>
                </tr></thead>
                <tbody><tr style={{borderBottom: '1px solid black'}}>
                    <td>x</td>
                    <td> <img src="../images/ash background.jpg" width="80px" height="80px" alt="ash" style={{borderRadius: 18, background: '#e5e5e5'}} /></td>
                    <td>Product A </td>
                    <td><span>₦</span> 4,000</td>
                    <td>
                    <button className="tab-btn"> 
                        <span onclick="decreaseInput()">-</span>
                        <input type="text" defaultValue={1} id="inputNumber" className="rollingNum" />
                        <span onclick="increaseInput()">+</span>
                    </button>
                    </td>
                    <td><span>₦</span> 4,000</td>
                </tr> 
                <tr style={{borderBottom: '1px solid black'}}>
                    <td>x</td>
                    <td> <img src="../images/ash background.jpg" width="80px" height="80px" alt="ash" style={{borderRadius: 18, background: '#e5e5e5'}} /> </td>
                    <td>Product A </td>
                    <td><span>₦</span> 4,000</td>
                    <td> 
                    <button className="tab-btn">
                        <span onclick="decrInput()">-</span>
                        <input type="text" defaultValue={1} id="rollingNumber" className="rollingNum" />
                        <span onclick="incrInput()">+</span>
                    </button>
                    </td>
                    <td><span>₦</span> 4,000</td>
                </tr> 
                <tr style={{borderBottom: '1px solid black'}}>
                    <td>x</td>
                    <td> <img src="../images/ash background.jpg" width="80px" height="80px" alt="ash" style={{borderRadius: 18, background: '#e5e5e5'}} /> </td>
                    <td>Product A </td>
                    <td><span>₦</span> 4,000</td>
                    <td>
                    <button className="tab-btn">
                        <span onclick="decInput()">-</span>
                        <input type="text" defaultValue={1} id="scrollingNumber" className="rollingNum" />
                        <span onclick="incInput()">+</span>
                    </button>
                    </td>
                    <td><span>₦</span> 4,000</td>
                </tr>
                </tbody></table> <br />
            <div id="btn">
                <button className="white-btn">Have A Coupon Code? </button>
                <button className="blue-btn" id="blue2">Apply Coupon </button>
                <button className="ash-btn">Update Cart</button>
            </div>
            </div>

            <div>
            <div id="total">
              <br />
              <h4>Cart Totals</h4> <br />
              <div style={{display: 'flex', justifyContent: 'space-between'}}><strong>Subtotal</strong>   <span>₦  12,000</span> </div>  <hr />
              <strong>Shipping</strong> <br /> 
              Flat Rate: <span>₦</span>1,000 <br />
              Shipping to <strong>21 MDS Estate, Abuja</strong> <br />
              <a href="#" style={{textDecoration: 'none'}}>Change Address</a> <br /> 
              <hr /> 
              <div style={{display: 'flex', justifyContent: 'space-between'}}><strong>Total</strong>        <strong> <span>₦</span>13,000 </strong></div> <br />
              <button className="blue-btn" id="blue1">Proceed to Checkout</button>
            </div>
            <br /><br /> 
            <button className="blue-btn">Continue Shopping </button>
          </div>


      </div>
    </Container>
  )
}

export default CartPage
