import { XR, ARButton, Controllers } from '@react-three/xr'
import { Canvas } from '@react-three/fiber'
import Label from './components/Label'
import Fox from './components/Fox'
import Door from './components/Door'
import Room from './components/Room'
import './index.css'
import { useEffect } from 'react'



export default function App() {

  useEffect(() => {
    // Check for AR support
    if ('xr' in navigator && 'AR' in navigator.xr) {
      // Request AR session
      navigator.xr.requestSession('immersive-ar', {
        requiredFeatures: ['hit-test'],
      }).then((session) => {
        // AR session is available
        // Perform further operations in the AR session
      }).catch((error) => {
        // Failed to request AR session
        console.error('Failed to request AR session:', error);
      });
    } else {
      // AR not supported
      console.error('AR not supported on this device');
    }
  }, []);
  
  return (
    <>
      <ARButton />
      <Canvas>
        <XR referenceSpace="local">
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          {/* <Label position={[0, 0.1, -0.2]} /> */}
          {/* <Fox /> */}
          <Door />
          <Room/>
          <Controllers />
        </XR>
      </Canvas>
    </>
  )
}
