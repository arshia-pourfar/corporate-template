import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    id: 1,
    title: "Modern Office Complex",
    description: "A state-of-the-art office building designed with sustainability in mind.",
    image: "/images/projects/project-1.jpg",
  },
  {
    id: 2,
    title: "Residential Tower",
    description: "Luxury living spaces combining comfort and modern architecture.",
    image: "/images/projects/project-2.jpg",
  },
  {
    id: 3,
    title: "Industrial Warehouse",
    description: "Efficient and durable warehouse facilities for global businesses.",
    image: "/images/projects/project-3.jpg",
  },
  {
    id: 4,
    title: "Shopping Center",
    description: "A modern hub for retail, entertainment, and leisure activities.",
    image: "/images/projects/project-1.jpg",
  },
  {
    id: 5,
    title: "Shopping Center",
    description: "A modern hub for retail, entertainment, and leisure activities.",
    image: "/images/projects/project-2.jpg",
  },
  {
    id: 6,
    title: "Shopping Center",
    description: "A modern hub for retail, entertainment, and leisure activities.",
    image: "/images/projects/project-3.jpg",
  },
  {
    id: 7,
    title: "Shopping Center",
    description: "A modern hub for retail, entertainment, and leisure activities.",
    image: "/images/projects/project-1.jpg",
  },
];

export default function ProjectPage() {
  return (
    <main className="relative">
      {/* هدر پروژه‌ها */}
      <section className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="font-black text-4xl md:text-5xl lg:text-6xl leading-normal text-center md:text-left">
          Our <span className="text-orange-500">Projects</span>
          <br />
          Excellence in Every Step
        </h1>
        {/* <div className="w-3/4 md:w-1/4 m-auto text-center mt-6 md:mt-0">
          <Image
            className="w-40 md:w-80 mx-auto rounded-xl"
            src="/images/header-image.jpg"
            alt="Projects Hero"
            width={300}
            height={300}
          />
        </div> */}
      </section>

      {/* لیست پروژه‌ها */}
      <section className="mt-12">
        {/* <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-center mb-8">
          Featured Projects
        </h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl shadow-lg overflow-hidden border hover:shadow-xl transition group"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="p-5">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="flex items-center gap-2 text-orange-500 font-semibold hover:underline">
                  Learn More <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* CTA */}
      <section className="mt-20 text-center">
        <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-6">
          Let’s Build Your Future Project Together
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-6">
          Ready to start your next big project? Contact us today and let our
          experts bring your vision to life with innovation and excellence.
        </p>
        <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
          Contact Us
        </button>
      </section>
    </main>
  );
}
