import React, { useEffect } from 'react'

import useStore from '../hooks/useStore'
import useKeyboard from '../hooks/useKeyboard'
import {
  dirtImg,
  grassImg,
  glassImg,
  oakLogImg,
  oakPlanksImg,
} from '../textures/images'

const images = {
  dirt: dirtImg,
  grass: grassImg,
  glass: glassImg,
  oakLog: oakLogImg,
  oakPlanks: oakPlanksImg,
}

const TextureSelector = () => {
  const { texture: activeTexture, setTexture } = useStore(state => state)
  const { dirt, grass, glass, oakLog, oakPlanks } = useKeyboard()

  useEffect(() => {
    const textures = { dirt, grass, glass, oakLog, oakPlanks }

    const selectedTexture = Object.keys(textures).reduce(
      (p, c) => (textures[c] ? c : p),
      null
    )
    if (selectedTexture) setTexture(selectedTexture)
  }, [dirt, grass, glass, oakLog, oakPlanks, setTexture])

  return (
    <div className='fixed bottom-centered texture-selector'>
      {Object.keys(images).map(key => (
        <img
          key={key}
          src={images[key]}
          alt={key}
          className={key === activeTexture ? 'active' : null}
        />
      ))}
    </div>
  )
}

export default TextureSelector
