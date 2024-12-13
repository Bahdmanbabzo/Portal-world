import { MeshPortalMaterial } from "@react-three/drei";

export default function PortalMaker({scene,cameraPosition}){
    return (
        <mesh>
            <planeGeometry args={[40,40]} />
            <MeshPortalMaterial>
                {scene}
            </MeshPortalMaterial>
        </mesh>
    )
}