import { Text3D } from '@react-three/drei';

const GeoText3D = () => {
  return (
    <Text3D
      font="/public/Roboto Black_Regular.json"
      height={1}
      position={[-3, 0, 0]}
      bevelEnabled
      bevelSize={0.05}
    >
      Geotext3D
      <meshNormalMaterial />
    </Text3D>
  );
};

export default GeoText3D;
