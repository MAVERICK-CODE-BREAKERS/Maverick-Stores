import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false)

  let menu
  let menuMask

  if (showMenu) {
    menu = (
      <div>
        <ul>
          <li>Console</li>
          <li>Laptop</li>
        </ul>
      </div>
    )
    menuMask = <div className='bg-black fixed top-0 left-0'></div>
  }

  return (
    <nav>
      <span className='text-xl'>
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>
      {menuMask}
      {menu}
    </nav>
  )
}

export default Navigation
