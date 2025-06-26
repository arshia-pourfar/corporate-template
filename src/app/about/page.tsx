import Image from "next/image";

// Default export for the Home component
export default function AboutPage() {
  return (
    <main>
      <section className="container p-2 px-8 m-auto overflow-x-hidden">
        {/* Introduction */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10 bg-white rounded-xl shadow-md p-6">
          <div className="basis-1/2 text-center md:text-left flex flex-col justify-center">
            <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl my-2 text-orange-600">About Our Company</h2>
            <div className="sm:text-lg font-medium sm:mt-6 mt-3 text-gray-700">
              With years of experience in providing professional services and innovative solutions, our company is committed to delivering the best results for our clients. We value quality, dedication, and customer satisfaction above all.
            </div>
          </div>
          <div className="basis-1/2 flex justify-center items-center">
            <Image className="rounded-lg shadow-lg object-cover" width={420} height={420} src={'/images/about-us.jpg'} alt="Company Team" />
          </div>
        </div>

        {/* Mission */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 bg-white rounded-xl shadow-md p-6">
          <div className="basis-1/2 flex justify-center items-center">
            <Image className="rounded-lg shadow-lg object-cover" width={420} height={420} src={'/images/medium-shot-low-angle-view-smiling-engineer.jpg'} alt="Company Mission" />
          </div>
          <div className="basis-1/2 px-4 py-3">
            <h3 className="font-bold text-2xl mb-2 text-orange-600">Our Mission</h3>
            <p className="text-base md:text-lg text-gray-700">
              To provide high-quality services and create added value for our clients through innovation, expertise, and a commitment to continuous improvement.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10 bg-white rounded-xl shadow-md p-6">
          <div className="basis-1/2 px-4 py-3">
            <h3 className="font-bold text-2xl mb-2 text-orange-600">Our Vision</h3>
            <p className="text-base md:text-lg text-gray-700">
              To become a leading company in the industry and deliver innovative solutions at both national and international levels.
            </p>
          </div>
          <div className="basis-1/2 flex justify-center items-center">
            <Image className="rounded-lg shadow-lg object-cover" width={420} height={420} src={'/images/projects/project-1.jpg'} alt="Company Vision" />
          </div>
        </div>

        {/* Values */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 bg-white rounded-xl shadow-md p-6">
          <div className="basis-1/2 flex justify-center items-center">
            <Image className="rounded-lg shadow-lg object-cover" width={420} height={420} src={'/images/business-partners/preview.jpg'} alt="Company Values" />
          </div>
          <div className="basis-1/2 px-4 py-3">
            <h3 className="font-bold text-2xl mb-2 text-orange-600">Our Values</h3>
            <ul className="list-disc pr-5 text-base md:text-lg space-y-2 text-gray-700">
              <li>Honesty and transparency in all interactions</li>
              <li>Commitment to quality and customer satisfaction</li>
              <li>Innovation and continuous learning</li>
              <li>Teamwork and mutual respect</li>
            </ul>
          </div>
        </div>

        {/* Our Team */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10 bg-white rounded-xl shadow-md p-6">
          <div className="basis-1/2 px-4 py-3">
            <h3 className="font-bold text-2xl mb-2 text-orange-600">Our Team</h3>
            <p className="text-base md:text-lg text-gray-700">
              Our team consists of skilled and motivated professionals who have successfully completed many projects through collaboration and dedication.
            </p>
          </div>
          <div className="basis-1/2 flex justify-center items-center">
            <Image className="rounded-lg shadow-lg object-cover" width={420} height={420} src={'/images/team/lee-robinson.png'} alt="Team Member" />
          </div>
        </div>
      </section>
    </main>
  );
}