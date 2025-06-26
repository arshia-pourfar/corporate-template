// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDesktop, faMobileAlt, faRocket, faWrench } from "@fortawesome/free-solid-svg-icons";
// import Image from "next/image";

// export default function WhyUs() {
//     const features = [
//         {
//             icon: faDesktop,
//             title: "Professional Design",
//             description: "Our modern and sleek design approach ensures your brand stands out in today's competitive market.",
//             image: "/images/professional-design.jpg"
//         },
//         {
//             icon: faMobileAlt,
//             title: "Fully Responsive",
//             description: "Experience seamless functionality across all devices - from mobile phones to desktop computers.",
//             image: "/images/responsive-design.jpg"
//         },
//         {
//             icon: faRocket,
//             title: "High Performance",
//             description: "Optimized for speed and efficiency, ensuring your website loads quickly and ranks well in search engines.",
//             image: "/images/high-performance.jpg"
//         },
//         {
//             icon: faWrench,
//             title: "Easy Customization",
//             description: "Flexible and customizable solutions that adapt to your specific business needs and requirements.",
//             image: "/images/customization.jpg"
//         }
//     ];

//     return (
//         <section id="whyus" className="relative py-16 bg-gradient-to-b from-white to-gray-50">
//             <div className="container mx-auto px-4">
//                 <div className="text-center mb-16">
//                     <h2 className="font-extrabold text-3xl md:text-5xl text-gray-800 mb-4">
//                         Why Choose Us?
//                     </h2>
//                     <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//                         We deliver exceptional solutions that drive your business forward with cutting-edge technology and innovative design.
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {features.map((feature, index) => (
//                         <div key={index} className="group hover:transform hover:scale-105 transition-all duration-300">
//                             <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//                                 <div className="relative h-48 w-full">
//                                     <Image
//                                         src={feature.image}
//                                         alt={feature.title}
//                                         layout="fill"
//                                         objectFit="cover"
//                                         className="transition-transform duration-300 group-hover:scale-110"
//                                     />
//                                 </div>
//                                 <div className="p-6">
//                                     <div className="mb-4">
//                                         <FontAwesomeIcon
//                                             icon={feature.icon}
//                                             className="text-orange-500 text-3xl mb-2"
//                                         />
//                                         <h3 className="text-xl font-bold text-gray-800 mb-2">
//                                             {feature.title}
//                                         </h3>
//                                     </div>
//                                     <p className="text-gray-600">
//                                         {feature.description}
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }






// import Image from "next/image";

// export default function WhyUs() {
//     return (
//         <section id='whyus' className='mt-5 h-[300px] text-center'>
//             <h2 className="font-extrabold text-3xl md:text-5xl">Why Us</h2>
//             <div className='bg-orange-500/95 h-[170px] w-4/6 m-auto flex justify-around items-center rounded-xl relative shadow-sm z-[2] mt-8'>
//                 <article className='font-bold text-xl'>
//                     <Image width={100} height={100} className='w-[90px] m-auto' src={`/images/business-partners-logo/preview.jpg`} alt="" />
//                     <div className='mt-3'>
//                         Easy Order
//                     </div>
//                 </article>
//                 <article className='font-bold text-xl'>
//                     <Image width={100} height={100} className='w-[90px] m-auto' src={`/images/business-partners-logo/preview.jpg`} alt="" />
//                     <div className='mt-3'>
//                         Fastest Delivery
//                     </div>
//                 </article>
//                 <article className='font-bold text-xl'>
//                     <Image width={100} height={100} className='w-[90px] m-auto' src={`/images/business-partners-logo/preview.jpg`} alt="" />
//                     <div className='mt-3'>
//                         Best Quality
//                     </div>
//                 </article>
//                 <article className='font-bold text-xl'>
//                     <Image width={100} height={100} className='w-[90px] m-auto' src={`/images/business-partners-logo/preview.jpg`} alt="" />
//                     <div className='mt-3'>
//                         Best Quality
//                     </div>
//                 </article>
//             </div>
//             <div className='w-4/6 px-5 m-auto flex justify-around items-center rounded-xl relative -top-[167px] z-0'>
//                 <div className='bg-orange-500/55 h-[180px] w-[100%] rounded-lg shadow-sm'>

//                 </div>
//             </div>
//         </section>
//     );

// }