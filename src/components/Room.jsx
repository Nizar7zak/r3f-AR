import { useGLTF } from "@react-three/drei"

const Room = () => {
    const door = useGLTF('./room.glb')

    return (
        <primitive
            object={door.scene}
            position={[0, -1, -1]}     

        />
    )
}

export default Room