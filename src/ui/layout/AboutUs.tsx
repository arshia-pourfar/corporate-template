import Image from "next/image";

export default function AboutUs() {
    return (
        <section className="flex justify-between mt-20">
            <div className="basis-2/5">
                <h2 className="font-extrabold text-5xl my-3">About Us</h2>
                <div className="text-lg font-medium mt-12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempora quibusdam repellendus velit impedit, libero autem, dignissimos ut quis, accusamus adipisci. Est voluptatem voluptas quasi alias animi veniam quam facilis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempora quibusdam repellendus velit impedit, libero autem, dignissimos ut quis, accusamus adipisci. Est voluptatem voluptas quasi alias animi veniam quam facilis.
                </div>
                <button className="p-3 px-8 font-medium text-xl bg-orange-500 text-white rounded-full mt-6">about us</button>
            </div>
            <div className="basis-1/2">
                <Image className="rounded-md" width={1000} height={1000} src={'/images/about-us.jpg'} alt="" />
            </div>
        </section>
    )
}