import { Stage } from '@react-three/drei'
function Model() {
  return (
    <Stage adjustCamera={false}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Stage>
  )
}

export default Model
