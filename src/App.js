import { Fragment } from 'react'
import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'

import TextureSelector from './components/TextureSelector'
import Ground from './components/Ground'
import Player from './components/Player'
import FPV from './components/FPV'
import Cubes from './components/Cubes'
import Menu from './components/Menu'

function App() {
  return (
    <Fragment>
      <Canvas style={{ width: '100vw', height: '100vh' }}>
        <Sky sunPosition={[100, 100, 20]} />
        {/* <directionalLight position={[0, 5, 3]} intensity={0.1} /> */}
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <div className='fixed centered cursor'>+</div>
      <TextureSelector />
      <Menu />
    </Fragment>
  )
}

export default App
