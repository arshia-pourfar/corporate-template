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
import clientText from "@/data/client-text.json";

// Default export for the Home component
export default function Home() {
  return (
    <>
      {/* // Main container for the homepage with padding and auto margins */}
      <main className="space-y-16">

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
        <ParallaxScroll clientsText={clientText} className="" key={0} />

        {/* Blog section displaying recent blog posts or articles */}
        <Blog />
      </main>
    </>
  );
}