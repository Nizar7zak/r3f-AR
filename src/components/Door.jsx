import { useGLTF } from "@react-three/drei"

const Door = () => {
    const door = useGLTF('./door.glb')

    return (
        <primitive
            object={door.scene}
        />
    )
}

export default Door