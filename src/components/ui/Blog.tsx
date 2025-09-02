import Image from "next/image";
import Link from "next/link";

export default function Blog() {
    const posts = [
        {
            image: "about-us.jpg",
            title: "Modern Construction Techniques",
            description:
                "Exploring the latest innovations in building technology and sustainable construction methods that are shaping the future of infrastructure development.",
        },
        {
            image: "medium-shot-low-angle-view-smiling-engineer.jpg",
            title: "Engineering Excellence",
            description:
                "Discover how our team of skilled engineers delivers exceptional results through precision planning and innovative problem-solving approaches.",
        },
        {
            image: "header-image.jpg",
            title: "Project Management Insights",
            description:
                "Learn about our proven project management methodologies that ensure timely delivery and superior quality across all construction phases.",
        },
        {
            image: "about-us.jpg",
            title: "Sustainable Building Solutions",
            description:
                "Understanding the importance of eco-friendly construction practices and how they contribute to environmental conservation and cost efficiency.",
        },
    ];

    return (
        <section className="mt-24 pb-6">
            {/* Header */}
            <div className="flex flex-row justify-between items-center mb-8">
                <h2 className="font-extrabold text-3xl md:text-5xl">Blog</h2>
                <Link
                    href="/blog"
                    className="p-2 px-6 md:p-3 md:px-8 text-base md:text-lg font-medium bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600 transition"
                >
                    See More
                </Link>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {posts.map((item, index) => (
                    <div
                        key={index}
                        className="group rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition duration-300 border border-gray-200"
                    >
                        {/* Image */}
                        <div className="overflow-hidden">
                            <Image
                                className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                                width={1000}
                                height={600}
                                src={`/images/${item.image}`}
                                alt={item.title}
                            />
                        </div>

                        {/* Content */}
                        <div className="p-4 space-y-2">
                            <h3 className="font-bold text-lg group-hover:text-orange-500 transition">
                                {item.title}
                            </h3>
                            <p className="line-clamp-3 text-sm text-gray-600">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
