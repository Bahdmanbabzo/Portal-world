import { Canvas } from '@react-three/fiber';

function World (){
    return (
        <div className="h-screen w-screen">
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[0, 10, 5]} intensity={1} />
                <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="orange" />
                </mesh>
            </Canvas>
        </div>
)};

export default World;