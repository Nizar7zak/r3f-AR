import { XR, ARButton, Controllers } from '@react-three/xr'
import { Canvas } from '@react-three/fiber'
import Label from './components/Label'
import Fox from './components/Fox'
import Door from './components/Door'
import Room from './components/Room'
import './index.css'



export default function App() {

  return (
    <>
      <ARButton />
      <Canvas>
        <XR referenceSpace="local">
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          {/* <Label position={[0, 0.1, -0.2]} /> */}
          <Fox />
          {/* <Door />
          <Room/> */}
          <Controllers />
        </XR>
      </Canvas>
    </>
  )
}
