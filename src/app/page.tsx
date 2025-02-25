import Navbar from "@/ui/layout/Navbar";
import Header from "@/ui/layout/Header";
import Services from "@/ui/layout/Services";
import SupportCompany from "@/ui/layout/support-our-company";
import OurProjects from "@/ui/layout/Projects";
import dataSlider from '@/data/our-project-data.json';
import AboutUs from "@/ui/layout/AboutUs";
import Blog from "@/ui/layout/Blog";
import Footer from "@/ui/layout/Footer";

export default function Home() {
  return (
    <main className="container p-2 px-8 m-auto">
      <Navbar />
      <Header />
      <Services />
      <SupportCompany />
      <OurProjects data={dataSlider} />
      <AboutUs />
      <Blog />
      <Footer />
    </main>
  );
}