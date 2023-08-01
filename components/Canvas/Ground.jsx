import { usePlane } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.1, 0],
  }));

  const texture = useLoader(TextureLoader, "/black-brick-texture.png");

  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial
        attach="material"
        map={texture}
        normalScale={0.01}
      />
    </mesh>
  );
};

export default Ground;
