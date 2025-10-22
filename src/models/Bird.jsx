import { useEffect, useRef } from "react";

import birdScence from "../assets/3d/bird.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
const Bird = () => {
  const birdRef = useRef();

  const { scene, animations } = useGLTF(birdScence);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions['Take 001'].play();
  }, []);

  useFrame(({clock, camera}) => {
    birdRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.3 +  5;

    if(birdRef.current.position.x > camera.position.x + 10){
      birdRef.current.rotation.y = Math.PI;
    }else if(birdRef.current.position.x < camera.position.x - 10){
      birdRef.current.rotation.y = 0;
    }

    if(birdRef.current.rotation.y === 0){
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    }else{
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });

  return (
    <mesh position={[-8, 1, -2]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
