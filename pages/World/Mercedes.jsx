import React, { Suspense } from "react";
import { Physics } from "@react-three/cannon";
import { Canvas, extend, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Sky } from "@react-three/drei";
import Loader from "./Loader";
import {
  CubeTextureLoader,
  CubeCamera,
  WebGLCubeRenderTarget,
  RGBFormat,
  LinearMipmapLinearFilter,
} from "three";

import { Ground } from "../../components/Canvas";

const Car = () => {
  const mercedes = useGLTF("/mercedes/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="0x000000" />
      <ambientLight intensity={1} />
      <pointLight intensity={10} position={[0, 20, 6]} />
      <primitive
        object={mercedes.scene}
        scale={2.5}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  );
};

function SkyBox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load(["/space.jpg"]);

  // Set the scene background property to the resulting texture.
  scene.background = texture;
  return null;
}

function Mercedes() {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        height: "100%",
        width: "100%",
      }}
    >
      <Canvas
        shadows
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
        camera={{ fov: 45, near: 1, far: 200, position: [-10, 3, 6] }}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2 - 0.3}
            // minPolarAngle={Math.PI / 2 - 10}
          />

          {/* <Sky
            distance={450000}
            sunPosition={[5, 1, 8]}
            inclination={0}
            azimuth={0.25}
          /> */}

          <Car />
          <SkyBox />
          {/* <Physics>
            <Ground />
          </Physics> */}
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}

export default Mercedes;
