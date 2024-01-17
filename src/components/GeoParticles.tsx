import { Point, Points, PointMaterial } from '@react-three/drei';
import { MathUtils } from 'three/src/math/MathUtils.js';

const pointColors = ['red', 'yellow', 'orange', 'blue', 'green', 'white'];

const GeoParticles = ({ count = 5000 }) => {
  return (
    <>
      <Points limit={count}>
        <PointMaterial size={0.05} vertexColors />
        {Array.from({ length: count }).map((_, i) => (
          <Point
            key={i}
            position={[
              MathUtils.randFloatSpread(10),
              MathUtils.randFloatSpread(10),
              MathUtils.randFloatSpread(10),
            ]}
            color={
              pointColors[Math.floor(Math.random() * (pointColors.length - 1))]
            }
          />
        ))}
      </Points>
    </>
  );
};

export default GeoParticles;
