import { usePlane } from '@react-three/cannon'
import { RepeatWrapping } from 'three'
import useStore from '../hooks/useStore'

import { groundTexture } from '../textures'

const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
  }))
  const addCube = useStore(state => state.addCube)

  groundTexture.wrapS = RepeatWrapping
  groundTexture.wrapT = RepeatWrapping
  groundTexture.repeat.set(100, 100)

  const onClick = e => {
    e.stopPropagation()
    const [x, y, z] = Object.values(e.point).map(Math.round)
    addCube(x, y, z)
  }

  return (
    <mesh ref={ref} onClick={onClick}>
      <planeGeometry attach={'geometry'} args={[100, 100]} />
      <meshStandardMaterial attach={'material'} map={groundTexture} />
    </mesh>
  )
}

export default Ground
