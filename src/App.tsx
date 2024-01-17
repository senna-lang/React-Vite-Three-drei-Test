import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
// import GeoOcean from './components/GeoOcean';
// import GeoParticles from './components/GeoParticles';
import GeoStars from './components/GeoStars';
// import GeoMaath from './components/GeoMaath';
// import GeoEnv from './components/GeoEnv';
// import GeoBox from './components/GeoBox';
// import GeoText from './components/GeoText';
// import GeoText3D from './components/Geotext3D';
// import GeoTexture from './components/GeoTexture';

function App() {
  return (
    <div className=" w-full h-screen">
      <Canvas shadows>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} castShadow />
        {/* <GeoBox/>
        <GeoText/>
        <GeoText3D/>
        <GeoTexture/>
        <GeoEnv/> */}
        <GeoStars/>
        {/* <GeoParticles />
        <GeoMaath/> */}
        <OrbitControls />
      </Canvas>
      {/* <GeoOcean/> */}
    </div>
  );
}

export default App;
