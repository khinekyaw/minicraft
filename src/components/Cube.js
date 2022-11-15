import { useBox } from '@react-three/cannon'

import useStore from '../hooks/useStore'
import * as textures from '../textures'

const Cube = ({ id, position, texture }) => {
  const [ref] = useBox(() => ({
    type: 'Static',
    position,
  }))

  const { addCube, removeCube } = useStore(state => state)

  const activeTexture = textures[texture + 'Texture']

  const onClick = e => {
    e.stopPropagation()
    // console.log('FI:', e.faceIndex)
    const clickedFace = Math.floor(e.faceIndex / 2)
    // console.log(clickedFace)
    const { x, y, z } = ref.current.position
    // console.log(x, y, z)
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

  return (
    <mesh ref={ref} onClick={onClick}>
      <boxGeometry attach='geometry' />
      <meshStandardMaterial attach='material' map={activeTexture} />
    </mesh>
  )
}

export default Cube
