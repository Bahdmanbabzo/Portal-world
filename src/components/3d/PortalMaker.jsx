import { MeshPortalMaterial } from "@react-three/drei";
import * as THREE from "three";
export default function PortalMaker({scene, cameraPosition, name, active, setActive}) {
    return (
        <mesh onDoubleClick={() => setActive(active === name? null : name)}>
            <planeGeometry args={[2,3]} />
            <MeshPortalMaterial side={THREE.DoubleSide} blend={active === name ? 1:0}>
                <perspectiveCamera position={cameraPosition}/>
                {scene}
            </MeshPortalMaterial>
        </mesh>
    )
}