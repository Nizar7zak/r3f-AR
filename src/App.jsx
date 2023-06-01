import { XR, ARButton, Controllers } from '@react-three/xr'
import { Canvas } from '@react-three/fiber'
import Label from './components/Label'
import './index.css'
import Fox from './components/Fox'



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
          <Controllers />
        </XR>
      </Canvas>
    </>
  )
}
