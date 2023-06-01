import { useHitTest } from "@react-three/xr"
import { useRef } from "react"

export default function Box({ color, size, scale, children, ...rest }) {
    const ref = useRef()
    useHitTest((hit) => {
        console.log(hit)
    })

    return (
        <mesh ref={ref} scale={scale} {...rest}>
            <boxGeometry args={size} />
            <meshPhongMaterial color={color} />
            {children}
        </mesh>
    )
}
