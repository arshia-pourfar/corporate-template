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
import WhyUs from "@/ui/layout/WhyUs";
import { ParallaxScroll } from "@/ui/layout/parallax-scroll";

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


        <WhyUs />
        <ParallaxScroll clientsText={[
          { image: "/images/person/amy-burns.png", clientName: "Lorem ipsum", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempora quibusdam repellendus velit impedit, libero autem, dignissimos ut quis, accusamus adipisci. Est voluptatem voluptas quasi alias animi veniam quam facilis.1" },
          { image: "/images/person/lee-robinson.png", clientName: "Lorem ipsum", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempora quibusdam repellendus velit impedit, libero autem, dignissimos ut quis, accusamus adipisci. Est voluptatem voluptas quasi alias animi veniam quam facilis.2" },
          { image: "/images/person/evil-rabbit.png", clientName: "Lorem ipsum", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempora quibusdam repellendus velit impedit, libero autem, dignissimos ut quis, accusamus adipisci. Est voluptatem voluptas quasi alias animi veniam quam facilis.3" },
          { image: "/images/person/delba-de-oliveira.png", clientName: "Lorem ipsum", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempora quibusdam repellendus velit impedit, libero autem, dignissimos ut quis, accusamus adipisci. Est voluptatem voluptas quasi alias animi veniam quam facilis.4" },
          { image: "/images/person/balazs-orban.png", clientName: "Lorem ipsum", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempora quibusdam repellendus velit impedit, libero autem, dignissimos ut quis, accusamus adipisci. Est voluptatem voluptas quasi alias animi veniam quam facilis.5" },
          { image: "/images/person/amy-burns.png", clientName: "Lorem ipsum", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempora quibusdam repellendus velit impedit, libero autem, dignissimos ut quis, accusamus adipisci. Est voluptatem voluptas quasi alias animi veniam quam facilis.6" },
          { image: "/images/person/michael-novotny.png", clientName: "Lorem ipsum", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempora quibusdam repellendus velit impedit, libero autem, dignissimos ut quis, accusamus adipisci. Est voluptatem voluptas quasi alias animi veniam quam facilis.7" },
          { image: "/images/person/delba-de-oliveira.png", clientName: "Lorem ipsum", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempora quibusdam repellendus velit impedit, libero autem, dignissimos ut quis, accusamus adipisci. Est voluptatem voluptas quasi alias animi veniam quam facilis.8" },
          { image: "/images/person/balazs-orban.png", clientName: "Lorem ipsum", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempora quibusdam repellendus velit impedit, libero autem, dignissimos ut quis, accusamus adipisci. Est voluptatem voluptas quasi alias animi veniam quam facilis.9" },
          { image: "/images/person/evil-rabbit.png", clientName: "Lorem ipsum", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempora quibusdam repellendus velit impedit, libero autem, dignissimos ut quis, accusamus adipisci. Est voluptatem voluptas quasi alias animi veniam quam facilis.10" },
          { image: "/images/person/lee-robinson.png", clientName: "Lorem ipsum", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempora quibusdam repellendus velit impedit, libero autem, dignissimos ut quis, accusamus adipisci. Est voluptatem voluptas quasi alias animi veniam quam facilis.11" },
          { image: "/images/person/balazs-orban.png", clientName: "Lorem ipsum", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempora quibusdam repellendus velit impedit, libero autem, dignissimos ut quis, accusamus adipisci. Est voluptatem voluptas quasi alias animi veniam quam facilis.12" },
          { image: "/images/person/evil-rabbit.png", clientName: "Lorem ipsum", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempora quibusdam repellendus velit impedit, libero autem, dignissimos ut quis, accusamus adipisci. Est voluptatem voluptas quasi alias animi veniam quam facilis.13" },
          { image: "/images/person/michael-novotny.png", clientName: "Lorem ipsum", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempora quibusdam repellendus velit impedit, libero autem, dignissimos ut quis, accusamus adipisci. Est voluptatem voluptas quasi alias animi veniam quam facilis.14" },
          { image: "/images/person/delba-de-oliveira.png", clientName: "Lorem ipsum", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempora quibusdam repellendus velit impedit, libero autem, dignissimos ut quis, accusamus adipisci. Est voluptatem voluptas quasi alias animi veniam quam facilis.15" },
          { image: "/images/person/amy-burns.png", clientName: "Lorem ipsum", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempora quibusdam repellendus velit impedit, libero autem, dignissimos ut quis, accusamus adipisci. Est voluptatem voluptas quasi alias animi veniam quam facilis.16" },
          { image: "/images/person/lee-robinson.png", clientName: "Lorem ipsum", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempora quibusdam repellendus velit impedit, libero autem, dignissimos ut quis, accusamus adipisci. Est voluptatem voluptas quasi alias animi veniam quam facilis.17" },
          { image: "/images/person/michael-novotny.png", clientName: "Lorem ipsum", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempora quibusdam repellendus velit impedit, libero autem, dignissimos ut quis, accusamus adipisci. Est voluptatem voluptas quasi alias animi veniam quam facilis.18" },
        ]} className="" key={0} />

        {/* Blog section displaying recent blog posts or articles */}
        <Blog />
      </main>
      {/* Footer section at the bottom of the page */}
      <Footer />
    </>
  );
}