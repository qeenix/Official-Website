import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

  //  stage tracking
  const [currentStage, setCurrentStage] = useState(null);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPostion = [-2, -5.5, -40];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth <= 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPostion, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPostion;
    if (window.innerWidth <= 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPostion = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPostion = [0, -4, -4];
    }
    return [screenScale, screenPostion];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[3, 1, 5]} intensity={3} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e21ff"
            groundColor="#000000"
            intensity={0.5}
          />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage} // ✅ pass it here
          />
          <Plane
            isRotating={isRotating}
            planeScale={planeScale}
            planePosition={planePosition}
            rotation={[0.4, 2, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
