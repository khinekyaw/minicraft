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
    <div className='fixed centered-bottom texture-selector'>
      {Object.keys(images).map((key, idx) => {
        const className = ['select']
        if (key === activeTexture) className.push('active')
        return (
          <div className={className.join(' ')} key={key}>
            <img src={images[key]} alt={key} />
            <span>{idx + 1}</span>
          </div>
        )
      })}
    </div>
  )
}

export default TextureSelector
