import { useBox } from '@react-three/cannon'
import { useState } from 'react'

import useStore from '../hooks/useStore'
import * as textures from '../textures'

const Cube = ({ id, position, texture }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [ref] = useBox(() => ({
    type: 'Static',
    position,
  }))

  const { addCube, removeCube } = useStore(state => state)

  const activeTexture = textures[texture + 'Texture']

  const onClick = e => {
    e.stopPropagation()
    const clickedFace = Math.floor(e.faceIndex / 2)
    let { x, y, z } = ref.current.position
    if (e.altKey) {
      return removeCube(id)
    }

    if (clickedFace === 0) return addCube(x + 1, y, z)
    else if (clickedFace === 1) return addCube(x - 1, y, z)
    else if (clickedFace === 2) return addCube(x, y + 1, z)
    else if (clickedFace === 3) return addCube(x, y - 1, z)
    else if (clickedFace === 4) return addCube(x, y, z + 1)
    else if (clickedFace === 5) return addCube(x, y, z - 1)
  }

  const onPointerMove = e => {
    e.stopPropagation()
    setIsHovered(true)
  }

  const onPointerOut = e => {
    e.stopPropagation()
    setIsHovered(false)
  }

  return (
    <mesh
      ref={ref}
      onClick={onClick}
      onPointerMove={onPointerMove}
      onPointerOut={onPointerOut}
      castShadow
      receiveShadow
    >
      <boxGeometry attach='geometry' />
      <meshStandardMaterial
        attach='material'
        map={activeTexture}
        color={isHovered ? 'lightgray' : 'white'}
        transparent={true}
        opacity={texture === 'glass' ? 0.9 : 1}
      />
    </mesh>
  )
}

export default Cube
