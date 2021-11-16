import React, { useState } from 'react'
import styled from './Header.Module.css'
import { Link } from 'react-router-dom'
import image from './maverick_logo2.png'

const Header = () => {
  const [menuBar, setMenuBar] = useState(false)
  const [cart, setCart] = useState(false)
  const [search, setSearch] = useState(false)

  return (
    <nav className={styled.navbar}>
      <Link to='/' className={`mb-2 ${styled.logo}`}>
        <img
          src={image}
          height={90}
          width={150}
          alt='Maverick Digital Stores'
        />
      </Link>
      <ul
        className={menuBar ? styled['navLinksMobile'] : styled['navLinks']}
        onClick={() => setMenuBar(false)}
      >
        <Link to='/Product-Category' className={styled.category}>
          <li>Consoles</li>
        </Link>
        <Link to='/Product-Category' className={styled.category}>
          <li>Laptops</li>
        </Link>
        <Link to='/Product-Category' className={styled.category}>
          <li>Watches</li>
        </Link>
        <Link to='/Product-Category' className={styled.category}>
          <li> Accessories</li>
        </Link>

        <Link to='#' className={`${styled.category} me-3 ${styled.ca}`}>
          <li>
            <i className='fa fa-search' aria-hidden='true'></i>
            {/* <div className={styled.serach_box}>
              <input type='text' className='text' placeholder='' />
              <input type='button' value='Search' />
            </div> */}
          </li>
        </Link>

        <Link to='/cart' className={`${styled.category} me-3 ${styled.ca}`}>
          <li>
            <i className='fas fa-shopping-cart' /> Cart
          </li>
        </Link>

        <Link to='/login' className={`${styled.signup} ms-3`}>
          <li>Login/Register</li>
        </Link>
      </ul>
      <Link
        to='#'
        className={search ? styled['search'] : styled['search-mobile']}
        onClick={() => {
          setMenuBar(false)
          setCart(false)
          setSearch(false)
        }}
      >
        <i className='fa fa-search' />
      </Link>
      <Link
        to='/cart'
        className={cart ? styled['cart'] : styled['cart-mobile']}
        onClick={() => {
          setMenuBar(false)
          setCart(false)
        }}
      >
        <i className='fas fa-shopping-cart' />
      </Link>
      <button
        className={styled.mobileIcon}
        onClick={() => setMenuBar(!menuBar)}
      >
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
