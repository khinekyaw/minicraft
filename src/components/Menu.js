import React, { useState } from 'react'

const Menu = () => {
  const [show, setShow] = useState(false)

  return show && <div className='fixed centered menu'>Menu</div>
}

export default Menu
