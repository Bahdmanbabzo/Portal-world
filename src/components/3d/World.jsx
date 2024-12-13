import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useState } from 'react';
import { EffectComposer, Noise } from '@react-three/postprocessing';
import Scene from './Scene'; 
import PortalMaker from './PortalMaker';

function World (){
    const [active, setActive] = useState(null);
    return (
        <div className="h-screen w-screen">
            <Canvas shadows>
                {/* <color attach="background" args={['#343434']} /> */}
                <ambientLight intensity={10} />
                <OrbitControls />
                <PortalMaker scene={<Scene />} cameraPosition={[-3.6,-1.5,-1.5]} name="immersive_cube" active={active} setActive={setActive}/>
                {/* <EffectComposer>
                    <Noise premultiply/>
                </EffectComposer> */}
            </Canvas>
        </div>
)};

export default World;