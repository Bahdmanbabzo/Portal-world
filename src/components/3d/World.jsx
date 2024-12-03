import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from '../Model'; 

function World (){
    return (
        <div className="h-screen w-screen">
            <Canvas shadows>
                <color attach="background" args={['#36454F']} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[0, 10, 5]} intensity={1} />
                <OrbitControls />
                <Model />
            </Canvas>
        </div>
)};

export default World;