import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import image from './maverick_logo2.png'

const Header = () => {
  const [menuBar, setMenuBar] = useState(false)
  const [cart, setCart] = useState(false)

  return (
    <nav className='navbar'>
      <Link to='/' className='logo mb-2'>
        <img
          src={image}
          height={90}
          width={150}
          alt='Maverick Digital Stores'
        />
      </Link>
      <ul
        className={menuBar ? 'nav-links-mobile' : 'nav-links'}
        onClick={() => setMenuBar(false)}
      >
        <Link to='/products/console' className='category'>
          <li>Consoles</li>
        </Link>
        <Link to='/products/laptops' className='category'>
          <li>Laptops</li>
        </Link>
        <Link to='/products/watches' className='category'>
          <li>Watches</li>
        </Link>
        <Link to='/products/accessories' className='category me-5'>
          <li> Accessories</li>
        </Link>

        <Link to='/cart' className='category me-3 ca'>
          <li>
            <i className='fas fa-shopping-cart' /> Cart
          </li>
        </Link>

        <Link to='/login' className='signup ms-3'>
          <li>Login/Register</li>
        </Link>
      </ul>
      <Link
        to='/cart'
        className={cart ? 'cart' : 'cart-mobile'}
        onClick={() => {
          setMenuBar(false)
          setCart(false)
        }}
      >
        <i className='fas fa-shopping-cart' />
      </Link>
      <button className='mobile-menu-icon' onClick={() => setMenuBar(!menuBar)}>
        {menuBar ? (
          <i className='fas fa-times'></i>
        ) : (
          <i className='fas fa-bars'></i>
        )}
      </button>
    </nav>
  )
}

export default Header
