// "use client";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";

// function Model() {
//   const { scene } = useGLTF("/model.glb");
//   return <primitive object={scene} />;
// }

// export default function ThreeDModel() {
//   return (
//     <Canvas camera={{ position: [0, 2, 5] }}>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[2, 2, 2]} />
//       <Model />
//       <OrbitControls />
//     </Canvas>
//   );
// }