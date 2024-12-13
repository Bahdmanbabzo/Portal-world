import { Stage, Cloud } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

function Model() {
  const gltf = useLoader(GLTFLoader, '/the_impossible_rubiks_cube.glb'); 
  console.log(gltf);
  return <primitive object={gltf.scene} position={[0,0,0]} />;
}

function Scene() {
  return (
    <group>
      <Model />
      <mesh castShadow position={[5,0,-20]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
      <mesh castShadow receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      <Cloud 
        bounds={[40, 1, 2]} 
        volume={60} 
        segments={40}
        color="#808080" 
        opacity={0.2}
        speed={2}
      />
    </group>
  )
}

export default Scene
