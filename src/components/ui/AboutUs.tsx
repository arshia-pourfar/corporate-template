import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
    return (
        <section className="flex flex-col-reverse lg:flex-row justify-between mt-20 items-stretch">
            <div className="basis-1/2 text-center md:text-left px-4 py-3 relative">
                <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl lg:mt-0 mt-5 my-2">About Us</h2>
                <div className="sm:text-lg font-medium sm:mt-6 mt-3 lg:line-clamp-[8] line-clamp-[10]">
                    We are a professional team dedicated to delivering quality solutions for your business. Discover how we can help you grow and succeed.<br />
                    Our expertise spans across various industries, allowing us to provide tailored strategies and innovative approaches for every client. We believe in building long-term partnerships, focusing on transparency, reliability, and measurable results. Whether you are a startup or an established company, our mission is to empower your business with the tools and support needed to achieve your goals and stay ahead in a competitive market.
                </div>
                <Link href="/about" className="p-3 w-full lg:w-auto px-10 font-medium text-xl bg-orange-500 text-white rounded-full xl:absolute mt-5 bottom-3">
                    Learn More
                </Link>
            </div>
            <div className="basis-1/2 mt-0 flex justify-center">
                <Image className="rounded-md w-full max-w-md md:max-w-none" width={1000} height={1000} src={'/images/about-us.jpg'} alt="About Us" />
            </div>
        </section>
    )
}