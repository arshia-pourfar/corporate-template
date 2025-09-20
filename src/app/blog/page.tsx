import Image from "next/image";
import Link from "next/link";

const blogPosts = [
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

export default function BlogPage() {
  return (
    <section className="px-4  py-12">
      {/* عنوان */}
      <div className="mb-10">
        <h2 className="font-extrabold text-3xl md:text-5xl text-center">
          Our Blog
        </h2>
      </div>

      {/* کارت‌ها */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((item, index) => (
          <div
            key={index}
            className="group shadow-md border border-text-secondary/50 rounded-xl overflow-hidden bg-bg-primary hover:shadow-xl transition duration-300 flex flex-col"
          >
            {/* تصویر */}
            <div className="overflow-hidden">
              <Image
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                width={1000}
                height={600}
                src={`/images/${item.image}`}
                alt={item.title}
              />
            </div>

            {/* متن */}
            <div className="p-3 flex flex-col justify-between flex-1">
              <h3 className="text-text-primary font-bold text-lg mb-2 group-hover:text-accent transition">
                {item.title}
              </h3>
              <p className="line-clamp-3 text-text-secondary text-sm mb-4">
                {item.description}
              </p>
              <Link
                href={`/blog/${index + 1}`}
                className="text-accent font-semibold hover:underline mt-auto inline-flex items-center gap-1"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
