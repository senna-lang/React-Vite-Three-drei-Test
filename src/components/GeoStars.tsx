import { Stars } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';

const GeoStars = () => {
  const starRef = useRef<Group>(null!);

  useFrame(() => {
    starRef.current.rotation.y += 0.001;
  });

  return (
    <>
      <group ref={starRef}>
        <Stars />
      </group>
    </>
  );
};

export default GeoStars;
