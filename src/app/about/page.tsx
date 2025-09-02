import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-gray-50 rounded-md">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden rounded-md">
        <Image
          src="/images/about-us.jpg"
          alt="Hero Background"
          fill
          className="object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4">Welcome to Our Company</h1>
          <p className="text-white/90 text-lg md:text-2xl max-w-2xl">
            Delivering innovative solutions with quality and dedication. We value our clients and their success.
          </p>
        </div>
      </section>

      <section className="container mx-auto p-6 space-y-12">
        {/* About Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="basis-1/2 text-center md:text-left flex flex-col justify-center">
            <h2 className="text-orange-600 font-extrabold text-3xl md:text-4xl mb-3">About Our Company</h2>
            <p className="text-gray-700 text-lg sm:text-xl">
              With years of experience in providing professional services and innovative solutions, our company is committed to delivering the best results for our clients.
            </p>
          </div>
          <div className="basis-1/2 flex justify-center items-center">
            <Image
              src="/images/about-us.jpg"
              alt="Company Team"
              width={420}
              height={420}
              className="rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="basis-1/2 flex justify-center items-center">
            <Image
              src="/images/medium-shot-low-angle-view-smiling-engineer.jpg"
              alt="Company Mission"
              width={420}
              height={420}
              className="rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="basis-1/2 text-left">
            <h3 className="text-orange-600 font-bold text-2xl mb-2">Our Mission</h3>
            <p className="text-gray-700 text-lg">
              To provide high-quality services and create added value for our clients through innovation, expertise, and a commitment to continuous improvement.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="basis-1/2 text-left">
            <h3 className="text-orange-600 font-bold text-2xl mb-2">Our Vision</h3>
            <p className="text-gray-700 text-lg">
              To become a leading company in the industry and deliver innovative solutions at both national and international levels.
            </p>
          </div>
          <div className="basis-1/2 flex justify-center items-center">
            <Image
              src="/images/projects/project-1.jpg"
              alt="Company Vision"
              width={420}
              height={420}
              className="rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="basis-1/2 flex justify-center items-center">
            <Image
              src="/images/business-partners/preview.jpg"
              alt="Company Values"
              width={420}
              height={420}
              className="rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="basis-1/2 text-left">
            <h3 className="text-orange-600 font-bold text-2xl mb-2">Our Values</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg">
              <li>Honesty and transparency in all interactions</li>
              <li>Commitment to quality and customer satisfaction</li>
              <li>Innovation and continuous learning</li>
              <li>Teamwork and mutual respect</li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="basis-1/2 text-left">
            <h3 className="text-orange-600 font-bold text-2xl mb-2">Our Team</h3>
            <p className="text-gray-700 text-lg">
              Our team consists of skilled and motivated professionals who have successfully completed many projects through collaboration and dedication.
            </p>
          </div>
          <div className="basis-1/2 flex justify-center items-center">
            <Image
              src="/images/business-partners/preview.jpg"
              alt="Team Member"
              width={420}
              height={420}
              className="rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
