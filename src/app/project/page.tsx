// Importing necessary components from the project structure
import OurProjects from "@/components/ui/Projects"; // Projects section component (takes data as a prop)
import dataSlider from '@/data/our-project-data.json'; // JSON data for the projects slider

// Default export for the Home component
export default function Home() {
  return (
    <>
      {/* // Main container for the homepage with padding and auto margins */}
      <main>
        <OurProjects data={dataSlider} />
      </main>
    </>
  );
}