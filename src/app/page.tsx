import Navbar from "@/app/components/Navbar";
import Header from "@/app/components/Header";
import Services from "@/app/components/Services";
import SupportCompany from "@/app/components/support-our-company";
import OurProjects from "./components/Projects";
import dataSlider from '@/app/data/our-project-data.json';

export default function Home() {
  return (
    <main className="container p-2 px-8">
      <Navbar />
      <Header />
      <Services />
      <SupportCompany />
      <OurProjects data={dataSlider}/>

    </main>
  );
}