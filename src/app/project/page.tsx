// Importing necessary components from the project structure
import Navbar from "@/ui/layout/Navbar"; // Navigation bar component
import OurProjects from "@/ui/layout/Projects"; // Projects section component (takes data as a prop)
import dataSlider from '@/data/our-project-data.json'; // JSON data for the projects slider

// Default export for the Home component
export default function Home() {
  return (
    <>
      {/* // Main container for the homepage with padding and auto margins */}
      <main className="container p-2 px-8 m-auto overflow-x-hidden">
        {/* Navigation bar at the top of the page */}
        <Navbar />
        <OurProjects data={dataSlider} />
      </main>
    </>
  );
}