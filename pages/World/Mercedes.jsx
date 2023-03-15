import React, { Suspense } from "react";
import { Physics } from "@react-three/cannon";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Sky } from "@react-three/drei";
import Loader from "./Loader";

import { Ground } from "../../components/Canvas";

const Car = () => {
  const mercedes = useGLTF("/mercedes/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <ambientLight intensity={1} />
      <pointLight intensity={10} position={[0, 20, 6]} />
      {/* <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} /> */}
      <primitive
        object={mercedes.scene}
        scale={2.5}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  );
};

// const MercedesObject = () => {
//   return (
//     <Canvas
//       shadows
//       frameloop="demand"
//       gl={{ preserveDrawingBuffer: true }}
//       camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
//     >
//       <Suspense fallback={<Loader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />

//         <Car />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

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
            maxPolarAngle={Math.PI / 2}
            // minPolarAngle={Math.PI / 2}
          />
          <Sky sunPosition={[100, 100, 20]} />
          <ambientLight intensity={1} />

          <Car />
          <Physics>
            <Ground />
          </Physics>
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}

export default Mercedes;
