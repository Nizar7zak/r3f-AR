import { useGLTF } from "@react-three/drei"

const Door = () => {
    const door = useGLTF('./door.glb')

    return (
        <primitive
            object={door.scene}
            position={[0, -1, -1]}     
        />
    )
}

export default Door