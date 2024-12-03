import { Stage } from '@react-three/drei'
function Model() {
  return (
    <Stage 
      adjustCamera={false}
      intensity={0}
    >
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    </Stage>
  )
}

export default Model
