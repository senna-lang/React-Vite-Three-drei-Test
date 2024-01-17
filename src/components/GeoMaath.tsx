import { Points } from '@react-three/drei';
import * as random from 'maath/random';
import { useState } from 'react';

const GeoMaath = (props: any) => {
  const [{ box,sphere }] = useState(() => {
    const box = random.inBox(new Float32Array(10000), { sides: [1, 2, 1] });
    const sphere = random.inSphere(box.slice(0), { radius: 0.75 });
    return { box, sphere };
  });

  return (
    <Points positions={sphere} stride={3} {...props}>
      <pointsMaterial size={0.005} />
    </Points>
  );
};

export default GeoMaath;
