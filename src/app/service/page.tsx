// Importing necessary components from the project structure
import Navbar from "@/ui/layout/Navbar"; // Navigation bar component
import Services from "@/ui/layout/Services"; // Services section component

// Default export for the Home component
export default function Home() {
  return (
    <>
      {/* // Main container for the homepage with padding and auto margins */}
      <main className="container p-2 px-8 m-auto overflow-x-hidden">
        {/* Navigation bar at the top of the page */}
        <Navbar />
        {/* Services section showcasing offered services */}
        <Services />
      </main>
    </>
  );
}