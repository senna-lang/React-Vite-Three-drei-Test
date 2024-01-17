import { Environment, Sphere, useEnvironment ,CubeCamera} from '@react-three/drei';

const GeoEnv = () => {
  const envMap = useEnvironment({
    files: '/public/hdr/laufenurg_church_4k.hdr',
  });

  return (
    <>
      <Environment map={envMap} background />
      <CubeCamera>
        {/* @ts-ignore */}
        {texture => (
          <>
            <Environment map={texture} />
            <Sphere>
              <meshStandardMaterial metalness={1} roughness={0} />
            </Sphere>
          </>
        )}
      </CubeCamera>
      <Sphere scale={0.5} position={[1.5, 1.5, 1.5]}>
        <meshStandardMaterial />
      </Sphere>
    </>
  );
};

export default GeoEnv;
