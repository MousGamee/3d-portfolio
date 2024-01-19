import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "../components";
import Island from "../models/Island";
import { Sky } from "@react-three/drei";
{
  /* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">POP UP</div> */
}

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screePosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screePosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Sky />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
