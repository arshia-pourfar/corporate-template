// Importing necessary components from the project structure
// import Navbar from "@/components/ui/Navbar"; // Navigation bar component
import Header from "@/components/ui/Header"; // Header section component
import Services from "@/components/ui/Services"; // Services section component
// import ThreeDSection from "@/components/ui/3D-modulse"; // 3D section component
import SupportCompany from "@/components/shared/support-our-company"; // Support our company section component
import OurProjects from "@/components/ui/Projects"; // Projects section component (takes data as a prop)
import dataSlider from '@/data/our-project-data.json'; // JSON data for the projects slider
import AboutUs from "@/components/ui/AboutUs"; // About Us section component
import Blog from "@/components/ui/Blog"; // Blog section component
// import Footer from "@/components/ui/Footer"; // Footer section component
// import WhyUs from "@/components/shared/WhyUs";
import { ParallaxScroll } from "@/components/shared/parallax-scroll";

// Default export for the Home component
export default function Home() {
  return (
    <>
      {/* // Main container for the homepage with padding and auto margins */}
      <main>

        {/* Header section below the navbar */}
        <Header />

        {/* Services section showcasing offered services */}
        <Services />

        {/* 3D Solutions section with new image */}
        {/* <ThreeDSection /> */}

        {/* Projects section displaying a slider of projects */}
        {/* Passes the `dataSlider` JSON data as a prop to the `OurProjects` component */}
        <OurProjects data={dataSlider} />

        {/* About Us section providing information about the company */}
        <AboutUs />

        {/* Section encouraging users to support the company */}
        <SupportCompany />


        {/* <WhyUs /> */}
        <ParallaxScroll clientsText={[
          { image: "/images/team/amy-burns.png", clientName: "Arshia Pourfar", text: "Working with this team was an outstanding experience. They delivered our project on time and with excellent quality. Their ability to understand our needs and translate them into practical solutions was truly impressive. I would definitely recommend them to anyone looking for a reliable partner." },
          { image: "/images/team/lee-robinson.png", clientName: "Sara Johnson", text: "Their attention to detail and professionalism exceeded our expectations. From the initial consultation to the final delivery, the team maintained clear communication and ensured that every aspect of the project was handled with care. We are extremely satisfied with the results and look forward to future collaborations." },
          { image: "/images/team/evil-rabbit.png", clientName: "Mohammad Rezaei", text: "The team's quick support and responsiveness made us feel confident throughout the project. Whenever we had questions or needed adjustments, they were always available and willing to help. Their dedication to customer satisfaction is truly commendable." },
          { image: "/images/team/delba-de-oliveira.png", clientName: "Lucas Oliveira", text: "They provided innovative solutions tailored to our business needs. The creative approach and technical expertise they brought to the table helped us overcome several challenges. We are very satisfied with the results and would gladly work with them again." },
          { image: "/images/team/balazs-orban.png", clientName: "Negar Ahmadi", text: "Creativity and precision in their work are remarkable. The team took the time to understand our vision and delivered a product that perfectly matched our requirements. We will definitely continue our collaboration for future projects." },
          { image: "/images/team/amy-burns.png", clientName: "Emily Carter", text: "The team was communicative and transparent throughout the project. Everything went smoothly, and we always felt informed about the progress. Their professionalism and positive attitude made the entire process enjoyable." },
          { image: "/images/team/michael-novotny.png", clientName: "Ali Mohammadi", text: "I am very pleased with the cooperation. Everything was delivered as planned, and the quality of the work was excellent. The team's commitment to meeting deadlines and maintaining high standards is truly impressive." },
          { image: "/images/team/delba-de-oliveira.png", clientName: "Sophie Müller", text: "Great experience from start to finish. Project management was top-notch, and the team was always available to address our concerns. Their expertise and dedication ensured a successful outcome for our project." },
          { image: "/images/team/balazs-orban.png", clientName: "Yasaman Fallah", text: "The team was very professional and friendly. The outcome exceeded our expectations, and we appreciated their willingness to go the extra mile to ensure our satisfaction. We highly recommend their services to others." },
          { image: "/images/team/evil-rabbit.png", clientName: "David Kim", text: "They understood our requirements perfectly and delivered a fantastic product. The attention to detail and commitment to quality were evident in every stage of the project. We are grateful for their hard work and expertise." },
          { image: "/images/team/lee-robinson.png", clientName: "Mehdi Hosseini", text: "The quality of work and the team's commitment were truly impressive. I highly recommend them to anyone seeking a dedicated and skilled team. Their support and guidance made a significant difference in our project's success." },
          { image: "/images/team/michael-novotny.png", clientName: "Anna Ivanova", text: "Professional, creative, and reliable. We look forward to future collaborations. The team's innovative ideas and strong work ethic set them apart from others we have worked with in the past." },
        ]} className="" key={0} />

        {/* Blog section displaying recent blog posts or articles */}
        <Blog />
      </main>
    </>
  );
}