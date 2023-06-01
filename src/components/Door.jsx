import { useGLTF } from "@react-three/drei"

const Door = () => {
    const door = useGLTF('./door.glb')
    
    return (
        <primitive
            object={door.scene}
            scale={0.01}
            position={[0, -0.5, -2]}
        />
    )
}

export default Door