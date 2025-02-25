import Image from "next/image";

export default function Blog() {
    return (
        <section className="mt-12">
            <div className="flex justify-between items-center px-2">
                <h2 className="font-extrabold text-5xl">Blog</h2>
                <button className="p-3 px-8 text-lg font-medium bg-orange-500 text-white rounded-full">See More</button>
            </div>
            <div className="flex justify-around overflow-hidden mt-5">
                <div className="basis-1/4 mx-2 shadow-md border border-black/50 rounded-md">
                    {/* this div is image */}
                    <Image className="rounded-t-md" width={1000} height={1000} src={'/images/about-us.jpg'} alt="" />
                    {/* <div className="bg-black h-96"></div> */}
                    <div className="bg-white w-full p-2 rounded-md">
                        <h3 className="font-semibold text-xl">Lorem ipsum dolor</h3>
                        <p className="line-clamp-3 text-sm mt-1 opacity-75 w-full">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vel consequatur culpa voluptatem, numquam consequuntur impedit tenetur modi fugit? Harum, placeat. Pariatur dicta, soluta neque hic dolorum eligendi porro distinctio!</p>
                    </div>
                </div>
                <div className="basis-1/4 mx-2 shadow-md border border-black/50 rounded-md">
                    {/* this div is image */}
                    <Image className="rounded-t-md" width={1000} height={1000} src={'/images/medium-shot-low-angle-view-smiling-engineer.jpg'} alt="" />
                    {/* <div className="bg-black h-96"></div> */}
                    <div className="bg-white w-full p-2 rounded-md">
                        <h3 className="font-semibold text-xl">Lorem ipsum dolor</h3>
                        <p className="line-clamp-3 text-sm mt-1 opacity-75 w-full">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vel consequatur culpa voluptatem, numquam consequuntur impedit tenetur modi fugit? Harum, placeat. Pariatur dicta, soluta neque hic dolorum eligendi porro distinctio!</p>
                    </div>
                </div>
                <div className="basis-1/4 mx-2 shadow-md border border-black/50 rounded-md">
                    {/* this div is image */}
                    <Image className="rounded-t-md" width={1000} height={1000} src={'/images/header-image.jpg'} alt="" />
                    {/* <div className="bg-black h-96"></div> */}
                    <div className="bg-white w-full p-2 rounded-md">
                        <h3 className="font-semibold text-xl">Lorem ipsum dolor</h3>
                        <p className="line-clamp-3 text-sm mt-1 opacity-75 w-full">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vel consequatur culpa voluptatem, numquam consequuntur impedit tenetur modi fugit? Harum, placeat. Pariatur dicta, soluta neque hic dolorum eligendi porro distinctio!</p>
                    </div>
                </div>
                <div className="basis-1/4 mx-2 shadow-md border border-black/50 rounded-md">
                    {/* this div is image */}
                    <Image className="rounded-t-md" width={1000} height={1000} src={'/images/about-us.jpg'} alt="" />
                    {/* <div className="bg-black h-96"></div> */}
                    <div className="bg-white w-full p-2 rounded-md">
                        <h3 className="font-semibold text-xl">Lorem ipsum dolor</h3>
                        <p className="line-clamp-3 text-sm mt-1 opacity-75 w-full">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vel consequatur culpa voluptatem, numquam consequuntur impedit tenetur modi fugit? Harum, placeat. Pariatur dicta, soluta neque hic dolorum eligendi porro distinctio!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}