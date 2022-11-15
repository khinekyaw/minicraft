import React, { useState } from 'react'
import useStore from '../hooks/useStore'

const Menu = () => {
  const [show, setShow] = useState(true)
  const { saveWorld, resetWorld } = useStore(state => state)

  return (
    show && (
      <div className='fixed centered-top menu'>
        <button onClick={saveWorld}>Save World</button>
        <button onClick={resetWorld}>Reset World</button>
      </div>
    )
  )
}

export default Menu
