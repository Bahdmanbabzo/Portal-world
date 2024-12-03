import { PlaneGeometry } from "three";

function createSmokes() {
    const smokes = [];
    for (let i = 0; i < 90; i++) {
        const x = Math.random() * 200 - 100; // Random x position between -100 and 100
        const y = Math.random() * 200 - 100; // Random y position between -100 and 100
        const z = Math.random() * 200 - 100; // Random z position between -100 and 100
        const rotation = Math.random() * Math.PI; // Random rotation between 0 and PI
        smokes.push(
            <mesh 
                key={i}
                position={[x, y, z]}
                rotation={[0, 0, rotation]}
            >
                <PlaneGeometry args={[100, 100]} />
                <meshLambertMaterial map={texture} transparent opacity={0.15} />
            </mesh>
        );
    }
    return smokes;
}

export default Smoke
