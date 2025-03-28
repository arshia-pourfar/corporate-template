import Image from "next/image";

export default function Blog() {
    return (
        <section className="mt-14 px-4">
            <div className="flex flex-row justify-between items-center">
                <h2 className="font-extrabold text-3xl md:text-5xl">Blog</h2>
                <button className="p-2 px-6 md:p-3 md:px-8 text-base md:text-lg font-medium bg-orange-500 text-white rounded-full">
                    See More
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {["about-us.jpg", "medium-shot-low-angle-view-smiling-engineer.jpg", "header-image.jpg", "about-us.jpg"].map((image, index) => (
                    <div key={index} className="shadow-sm border border-black/20 rounded-md overflow-hidden">
                        <Image className="rounded-t-md w-full h-48 object-cover" width={1000} height={1000} src={`/images/${image}`} alt="" />
                        <div className="bg-white p-4">
                            <h3 className="font-semibold text-lg">Lorem ipsum dolor</h3>
                            <p className="line-clamp-3 text-sm mt-2 opacity-75">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vel consequatur culpa voluptatem, numquam consequuntur impedit tenetur modi fugit? Harum, placeat.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}