import { FocusCards } from "@/app/components/ui/focus-cards";

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
    <section className="mt-16">
      <h2 className="font-extrabold text-5xl mb-3">Services Tailored to You</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit impedit beatae necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit impedit beatae necessitatibus!</p>
      <FocusCards cards={cards} />
    </section>
  );
}
