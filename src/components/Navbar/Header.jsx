import React from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements'
import { Link } from 'react-router-dom'
import image from './maverick_logo2.png'

const Header = () => {
  return (
    <>
      <Nav>
        <Bars>
          <img
            src={image}
            height={90}
            width={150}
            alt='Maverick Digital Stores'
          />
        </Bars>
        <Link to='/' className='ms-3'>
          <img
            src={image}
            height={90}
            width={150}
            alt='Maverick Digital Stores'
          />
        </Link>

        <NavMenu>
          <NavLink to='/products/console'>CONSOLE</NavLink>
          <NavLink to='/products/laptops'>LAPTOPS</NavLink>
          <NavLink to='/products/watches'>WATCHES</NavLink>
          <NavLink to='/products/accessories'>ACCESSORIES</NavLink>
        </NavMenu>
        <NavMenu>
          <NavLink to='/cart'>
            <i className='fas fa-shopping-cart' />
            Cart
          </NavLink>

          <NavLink to='/wishlist'>
            <i className='fas fa-heart' />
            Wishlist
          </NavLink>
        </NavMenu>
        <NavBtn className='me-5'>
          <NavBtnLink to='/login'>Login/Register</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Header
