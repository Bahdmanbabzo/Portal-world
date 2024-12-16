import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function CameraController({ active, portalScene }) {
  const { camera } = useThree();

  useEffect(() => {
    if (active) {
      const targetPosition = new THREE.Vector3();
      const targetObject = portalScene.current.getObjectByName(active);
      if (targetObject) {
        targetObject.getWorldPosition(targetPosition);
        camera.position.lerp(targetPosition, 0.1);
      }
    } else {
      camera.position.lerp(new THREE.Vector3(-3.6, -1.5, -1.5), 0.1);
    }
  }, [active, camera, portalScene]);

  return null;
}