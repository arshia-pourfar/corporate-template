import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive, fast, and modern websites tailored to your business needs.",
      image: "/images/services/web-development.jpg",
    },
    {
      title: "Mobile App Development",
      description: "Creating high-quality mobile applications for Android and iOS platforms.",
      image: "/images/services/mobile-app.jpg",
    },
    {
      title: "UI/UX Design",
      description: "Designing user-friendly interfaces with modern and engaging experiences.",
      image: "/images/services/ui-ux.jpg",
    },
    {
      title: "Digital Marketing",
      description: "Providing SEO, social media, and marketing strategies to grow your business online.",
      image: "/images/services/digital-marketing.jpg",
    },
  ];

  return (
    <main className="bg-gray-50 rounded-md min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden rounded-md">
        <Image
          src="/images/header-image.jpg"
          alt="Services Hero"
          fill
          className="object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4">Our Services</h1>
          <p className="text-white/90 text-lg md:text-2xl max-w-2xl">
            Discover the range of services we offer to help your business grow and succeed.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center p-6"
          >
            <div className="w-40 h-40 mb-4 relative">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="rounded-xl object-cover hover:scale-105 transition-transform duration-300 "
              />
            </div>
            <h3 className="text-orange-600 font-bold text-xl mb-2">{service.title}</h3>
            <p className="text-gray-700 text-base">{service.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
