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
                {[
                    { image: "about-us.jpg", title: "Modern Construction Techniques", description: "Exploring the latest innovations in building technology and sustainable construction methods that are shaping the future of infrastructure development." },
                    { image: "medium-shot-low-angle-view-smiling-engineer.jpg", title: "Engineering Excellence", description: "Discover how our team of skilled engineers delivers exceptional results through precision planning and innovative problem-solving approaches." },
                    { image: "header-image.jpg", title: "Project Management Insights", description: "Learn about our proven project management methodologies that ensure timely delivery and superior quality across all construction phases." },
                    { image: "about-us.jpg", title: "Sustainable Building Solutions", description: "Understanding the importance of eco-friendly construction practices and how they contribute to environmental conservation and cost efficiency." }
                ].map((item, index) => (
                    <div key={index} className="shadow-sm border border-black/20 rounded-md overflow-hidden">
                        <Image className="rounded-t-md w-full h-48 object-cover" width={1000} height={1000} src={`/images/${item.image}`} alt="" />
                        <div className="bg-white p-4">
                            <h3 className="font-semibold text-lg">{item.title}</h3>
                            <p className="line-clamp-3 text-sm mt-2 opacity-75">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}