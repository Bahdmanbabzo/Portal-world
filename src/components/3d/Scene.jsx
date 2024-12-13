import { Stage, Cloud, Float } from '@react-three/drei'
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
      <Float
      speed={3}
      floatIntensity={3}>
        <Model />
      </Float>
      <Cloud 
        bounds={[50, 1, 2]} 
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
