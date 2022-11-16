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
import Helper from './components/Helper'

function App() {
  return (
    <Fragment>
      <Canvas style={{ width: '100vw', height: '100vh' }} shadows={true}>
        <Sky
          distance={450000}
          sunPosition={[-2, 6, 2]}
          inclination={0}
          azimuth={0.25}
        />
        <directionalLight
          position={[-1, 5, 1]}
          intensity={0.4}
          castShadow
          shadow-camera-left={-20}
          shadow-camera-right={20}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
        />
        <ambientLight intensity={0.45} />
        <FPV />
        <Physics gravity={[0, -10, 0]}>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <div className='fixed centered cursor'>+</div>
      <TextureSelector />
      <Menu />
      <Helper />
    </Fragment>
  )
}

export default App
