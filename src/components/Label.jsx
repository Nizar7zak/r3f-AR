import { Suspense, useState } from 'react'
import { Text } from '@react-three/drei'
import { Interactive } from '@react-three/xr'
import Box from './Box'


export default function Label(props) {
    const [hover, setHover] = useState(false)
    const [color, setColor] = useState('blue')
  
    const onSelect = () => {
      setColor((Math.random() * 0xffffff) | 0)
    }
  
    return (
      <Interactive onHover={() => setHover(true)} onBlur={() => setHover(false)} onSelect={onSelect}>
        <Box color={color} scale={hover ? [0.6, 0.6, 0.6] : [0.5, 0.5, 0.5]} size={[0.4, 0.1, 0.1]} {...props}>
          <Suspense fallback={null}>
            <Text position={[0, 0, 0.06]} fontSize={0.05} color="#000" anchorX="center" anchorY="middle">
              Hello react-xr!
            </Text>
          </Suspense>
        </Box>
      </Interactive>
    )
  }
  