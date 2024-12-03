import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Noise } from '@react-three/postprocessing';
import Model from './Model'; 

function World (){
    return (
        <div className="h-screen w-screen">
            <Canvas shadows>
                <color attach="background" args={['#343434']} />
                <directionalLight position={[5, 5, 5]} intensity={3} />
                <OrbitControls />
                <Model />
                {/* <EffectComposer>
                    <Noise premultiply/>
                </EffectComposer> */}
            </Canvas>
        </div>
)};

export default World;