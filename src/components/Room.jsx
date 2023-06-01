import { useGLTF } from "@react-three/drei"

const Room = () => {
    const door = useGLTF('./room.glb')

    return (
        <primitive
            object={door.scene}
        />
    )
}

export default Room