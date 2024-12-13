import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Noise } from '@react-three/postprocessing';
import Scene from './Scene'; 
import PortalMaker from './PortalMaker';

function World (){
    return (
        <div className="h-screen w-screen">
            <Canvas shadows>
                {/* <color attach="background" args={['#343434']} /> */}
                <ambientLight intensity={10} />
                <OrbitControls />
                <PortalMaker scene={<Scene />} cameraPosition={[-3.6,-1.5,-1.5]}/>
                {/* <EffectComposer>
                    <Noise premultiply/>
                </EffectComposer> */}
            </Canvas>
        </div>
)};

export default World;