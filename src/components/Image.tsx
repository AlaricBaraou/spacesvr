import { Suspense } from "react";
import * as THREE from "three";
import { useLoader } from "react-three-fiber";
import { Material } from "three";
import Frame from "./misc/Frame";

type ImageProps = JSX.IntrinsicElements["group"] & {
  src: string;
  size?: number;
  framed?: boolean;
  material?: Material;
};

const UnsuspensedImage = (props: ImageProps) => {
  const { src, size = 1, framed, material } = props;

  const texture = useLoader(THREE.TextureLoader, src);

  const { width = 1, height = 1 } = texture.image;

  const max = Math.max(width, height);
  const WIDTH = (width / max) * size;
  const HEIGHT = (height / max) * size;

  return (
    <group {...props}>
      <mesh>
        <planeBufferGeometry args={[WIDTH, HEIGHT]} />
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>
      {framed && <Frame width={WIDTH} height={HEIGHT} material={material} />}
    </group>
  );
};

export const Image = (props: ImageProps) => {
  return (
    <Suspense fallback={null}>
      <UnsuspensedImage {...props} />
    </Suspense>
  );
};
