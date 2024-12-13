import { MeshPortalMaterial } from "@react-three/drei";
import * as THREE from "three";
export default function PortalMaker({scene,cameraPosition}){
    return (
        <mesh>
            <planeGeometry args={[2,3]} />
            <MeshPortalMaterial side={THREE.DoubleSide}>
                <perspectiveCamera position={cameraPosition}/>
                {scene}
            </MeshPortalMaterial>
        </mesh>
    )
}