import Image from "next/image";

export default function SupportCompany() {
    const logoMarquee = [
        'preview.jpg',
        'logo.png',
        'preview.jpg',
        'logo.png',
        'preview.jpg',
        'logo.png',
        'preview.jpg',
        'logo.png',
        'preview.jpg',
        'logo.png',
        'preview.jpg',
        'logo.png',
        'preview.jpg',
        'logo.png',
    ];

    return (
        <section className="w-full text-center">
            <h2 className="font-extrabold text-3xl md:text-5xl">Our Valued Business Partners</h2>
            <div className="overflow-hidden bg-primaryspace-nowrap relative w-full py-4 my-7">
                <div className="flex animate-marquee">
                    {[...logoMarquee, ...logoMarquee].map((name, index) => (
                        <div key={index} className="flex-shrink-0">
                            <Image
                                width={80}
                                height={32}
                                className="mx-5 md:mx-10 bg-text-primary hover:bg-secondary  transition-all"
                                src={`/images/business-partners/${name}`}
                                alt={`Company ${index}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}