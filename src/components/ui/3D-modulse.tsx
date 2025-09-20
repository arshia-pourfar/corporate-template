// "use client";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
// import { motion } from "framer-motion";
// import { Suspense, useState } from "react";

// function Model() {
//     const { scene } = useGLTF("/model.glb");
//     return <primitive object={scene} />;
// }

// function LoadingSpinner() {
//     return (
//         <div className="absolute inset-0 flex items-center justify-center bg-bg-primary/90 backdrop-blur-sm">
//             <div className="text-center">
//                 <div className="animate-spin rounded-full h-16 w-16 border-4 border-accent border-t-transparent mx-auto mb-4"></div>
//                 <p className="text-bg-secondary -600 font-medium">Loading 3D Model...</p>
//                 <p className="text-bg-secondary -400 text-sm mt-2">Please wait while we prepare your interactive experience</p>
//             </div>
//         </div>
//     );
// }

// export default function ThreeDSection() {
//     const [isLoading, setIsLoading] = useState(true);

//     return (
//         <section className="relative py-16 px-4 overflow-hidden">
//             {/* Background with gradient */}
//             <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-blue-50"></div>

//             <div className="relative z-10 max-w-7xl mx-auto">
//                 {/* Section Header */}
//                 <div className="text-center mb-12">
//                     <motion.h2
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="font-extrabold text-4xl md:text-5xl lg:text-6xl mb-4"
//                     >
//                         Interactive 3D Model
//                     </motion.h2>
//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                         className="text-lg md:text-xl text-bg-secondary -600 max-w-3xl mx-auto"
//                     >
//                         Explore our detailed 3D model with full interactive controls. Rotate, zoom, and examine every detail of our construction projects.
//                     </motion.p>
//                 </div>

//                 {/* 3D Content Grid */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                     {/* Left: 3D Model Viewer */}
//                     <motion.div
//                         initial={{ opacity: 0, x: -50 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8 }}
//                         className="relative"
//                     >
//                         {/* 3D Canvas Container */}
//                         <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-bg-secondary -100 to-bg-secondary -200">
//                             <Canvas
//                                 camera={{
//                                     position: [0, 2, 5],
//                                     fov: 50,
//                                     near: 0.1,
//                                     far: 1000
//                                 }}
//                                 style={{ background: 'transparent' }}
//                                 onCreated={() => setIsLoading(false)}
//                             >
//                                 <Suspense fallback={null}>
//                                     {/* Lighting */}
//                                     <ambientLight intensity={0.6} />
//                                     <directionalLight
//                                         position={[10, 10, 5]}
//                                         intensity={1}
//                                         castShadow
//                                         shadow-mapSize-width={2048}
//                                         shadow-mapSize-height={2048}
//                                     />
//                                     <pointLight position={[-10, -10, -5]} intensity={0.5} />

//                                     {/* Environment for better reflections */}
//                                     <Environment preset="city" />

//                                     {/* 3D Model */}
//                                     <Model />

//                                     {/* Interactive Controls */}
//                                     <OrbitControls
//                                         enablePan={true}
//                                         enableZoom={true}
//                                         enableRotate={true}
//                                         minDistance={2}
//                                         maxDistance={10}
//                                         autoRotate={false}
//                                         autoRotateSpeed={0.5}
//                                     />
//                                 </Suspense>
//                             </Canvas>

//                             {/* Loading Overlay */}
//                             {isLoading && <LoadingSpinner />}
//                         </div>

//                         {/* Instructions */}
//                         <div className="text-center mt-6 text-sm text-bg-secondary -500">
//                             <p>🖱️ Drag to rotate • 🔍 Scroll to zoom • 📱 Touch to interact</p>
//                         </div>
//                     </motion.div>

//                     {/* Right: Content */}
//                     <motion.div
//                         initial={{ opacity: 0, x: 50 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8, delay: 0.3 }}
//                         className="space-y-8"
//                     >
//                         {/* Feature 1 */}
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: 0.4 }}
//                             className="flex items-start space-x-4"
//                         >
//                             <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
//                                 <svg className="w-6 h-6 text-bg-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//                                 </svg>
//                             </div>
//                             <div>
//                                 <h3 className="text-xl font-bold mb-2">Real 3D Model</h3>
//                                 <p className="text-bg-secondary -600">Explore our actual 3D construction model with full interactive controls and realistic lighting.</p>
//                             </div>
//                         </motion.div>

//                         {/* Feature 2 */}
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: 0.6 }}
//                             className="flex items-start space-x-4"
//                         >
//                             <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
//                                 <svg className="w-6 h-6 text-bg-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                                 </svg>
//                             </div>
//                             <div>
//                                 <h3 className="text-xl font-bold mb-2">Full Interaction</h3>
//                                 <p className="text-bg-secondary -600">Rotate, zoom, and pan around the model to examine every detail from any angle.</p>
//                             </div>
//                         </motion.div>

//                         {/* Feature 3 */}
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: 0.8 }}
//                             className="flex items-start space-x-4"
//                         >
//                             <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
//                                 <svg className="w-6 h-6 text-bg-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                 </svg>
//                             </div>
//                             <div>
//                                 <h3 className="text-xl font-bold mb-2">Professional Quality</h3>
//                                 <p className="text-bg-secondary -600">High-quality 3D rendering with realistic lighting, shadows, and materials.</p>
//                             </div>
//                         </motion.div>

//                         {/* CTA Button */}
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: 1 }}
//                             className="pt-4"
//                         >
//                             <button className="bg-gradient-to-r from-accent to-orange-600 text-bg-primary px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
//                                 Explore 3D Model
//                             </button>
//                         </motion.div>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// }