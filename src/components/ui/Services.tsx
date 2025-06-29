import { FocusCards } from "@/components/ui/focus-cards";

export default function Services() {
  const cards = [
    {
      title: "Building renovation",
      src: "/images/medium-shot-low-angle-view-smiling-engineer.jpg",
    },
    {
      title: "Interior Finishing",
      src: "/images/medium-shot-low-angle-view-smiling-engineer.jpg",
    },
    {
      title: "Roofing Solutions",
      src: "/images/medium-shot-low-angle-view-smiling-engineer.jpg",
    },
    {
      title: "Foundation Repair",
      src: "/images/medium-shot-low-angle-view-smiling-engineer.jpg",
    },
  ];

  return (
    <section className="mt-10 md:mt-12 px-4 md:px-8 lg:px-16 text-center md:text-left">
      <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl mb-3">Services Tailored to You</h2>
      <p className="text-sm md:text-base lg:text-lg max-w-3xl mx-auto md:mx-0">
        We provide comprehensive construction and renovation services tailored to meet your specific needs. Our experienced team ensures quality craftsmanship and timely project completion for all your building requirements.
      </p>
      <FocusCards cards={cards} />
    </section>
  );
}