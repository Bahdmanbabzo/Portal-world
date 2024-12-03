import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from '../Model'; 

function World (){
    return (
        <div className="h-screen w-screen">
            <Canvas shadows>
                <color attach="background" args={['#343434']} />
                <fogExp2 attach="fog" args={['#808080', 0.2]} />
                <directionalLight position={[5, 5, 5]} intensity={3} />
                <OrbitControls />
                <Model />
            </Canvas>
        </div>
)};

export default World;