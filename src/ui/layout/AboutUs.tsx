import Image from "next/image";

export default function AboutUs() {
    return (
        <section className="flex flex-col-reverse lg:flex-row justify-between mt-20 items-stretch">
            <div className="basis-1/2 sm:text-center md:text-left px-4 py-3 relative">
                <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-center md:text-left lg:mt-0 mt-5 my-2">About Us</h2>
                <div className="sm:text-lg font-medium sm:mt-6 mt-3 lg:line-clamp-[8] line-clamp-[10]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempora quibusdam repellendus velit impedit, libero autem, dignissimos ut quis, accusamus adipisci. Est voluptatem voluptas quasi alias animi veniam quam facilis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempora quibusdam repellendus velit impedit, libero autem, dignissimos ut quis, accusamus adipisci. Est voluptatem voluptas quasi alias animi veniam quam facilis.
                </div>
                <button className="p-3 w-full lg:w-auto px-10 font-medium text-xl bg-orange-500 text-white rounded-full xl:absolute mt-5 bottom-3">
                    about us
                </button>
            </div>
            <div className="basis-1/2 mt-0 flex justify-center">
                <Image className="rounded-md w-full max-w-md md:max-w-none" width={1000} height={1000} src={'/images/about-us.jpg'} alt="About Us" />
            </div>
        </section>
    )
}