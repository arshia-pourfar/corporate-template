import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faMobileAlt, faRocket, faWrench } from "@fortawesome/free-solid-svg-icons";

export default function WhyUs() {
    return (
        <section id="whyus" className="relative mt-5 text-center">
            <h2 className="font-extrabold text-3xl md:text-5xl">Why Choose Us?</h2>

            <div className="relative w-full md:w-9/12 m-auto mt-8 px-6 py-5 flex flex-wrap justify-center md:justify-around items-center rounded-xl bg-orange-500/95 h-auto shadow-md before:absolute before:content-[''] before:w-full before:h-full before:bg-orange-500/55 before:blur-lg before:rounded-xl before:-z-10 before:top-4 before:left-0">
                <article className="text-xl font-bold flex flex-col items-center px-2 my-4 xl:my-0 xl:basis-1/4 md:basis-1/2">
                    <FontAwesomeIcon icon={faDesktop} className="text-white text-6xl" />
                    <div className="mt-3">Professional & Modern Design</div>
                </article>
                <article className="text-xl font-bold flex flex-col items-center px-2 my-4 xl:my-0 xl:basis-1/4 md:basis-1/2">
                    <FontAwesomeIcon icon={faMobileAlt} className="text-white text-6xl" />
                    <div className="mt-3">Fully Responsive & Mobile-Friendly</div>
                </article>
                <article className="text-xl font-bold flex flex-col items-center px-2 my-4 xl:my-0 xl:basis-1/4 md:basis-1/2">
                    <FontAwesomeIcon icon={faRocket} className="text-white text-6xl" />
                    <div className="mt-3">SEO Optimized & High Performance</div>
                </article>
                <article className="text-xl font-bold flex flex-col items-center px-2 my-4 xl:my-0 xl:basis-1/4 md:basis-1/2">
                    <FontAwesomeIcon icon={faWrench} className="text-white text-6xl" />
                    <div className="mt-3">Easy Customization & Clean Code</div>
                </article>
            </div>
        </section>
    );
}






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