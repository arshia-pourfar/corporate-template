// Importing necessary components from the project structure
import Navbar from "@/ui/layout/Navbar"; // Navigation bar component
import Header from "@/ui/layout/Header"; // Header section component
import Services from "@/ui/layout/Services"; // Services section component
import SupportCompany from "@/ui/layout/support-our-company"; // Support our company section component
import OurProjects from "@/ui/layout/Projects"; // Projects section component (takes data as a prop)
import dataSlider from '@/data/our-project-data.json'; // JSON data for the projects slider
import AboutUs from "@/ui/layout/AboutUs"; // About Us section component
import Blog from "@/ui/layout/Blog"; // Blog section component
import Footer from "@/ui/layout/Footer"; // Footer section component

// Default export for the Home component
export default function Home() {
  return (
    <>
      {/* // Main container for the homepage with padding and auto margins */}
      <main className="container p-2 px-8 m-auto overflow-x-hidden">
        {/* Navigation bar at the top of the page */}
        <Navbar />

        {/* Header section below the navbar */}
        <Header />

        {/* Services section showcasing offered services */}
        <Services />

        {/* Projects section displaying a slider of projects */}
        {/* Passes the `dataSlider` JSON data as a prop to the `OurProjects` component */}
        <OurProjects data={dataSlider} />

        {/* About Us section providing information about the company */}
        <AboutUs />

        {/* Section encouraging users to support the company */}
        <SupportCompany />

        {/* Blog section displaying recent blog posts or articles */}
        <Blog />
      </main>
      {/* Footer section at the bottom of the page */}
      <Footer />
    </>
  );
}