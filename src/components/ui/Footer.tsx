import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <>
            <div className="border-t border-black/40 mt-8"></div>
            <footer className="mt-6 relative mx-auto container px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:pt-5">
                    <div className="text-center">
                        <Image width={100} height={100} className="mx-auto filter grayscale md:w-auto md:h-auto w-32" src="/images/7459344.jpg" alt="" />
                        <ul className="flex justify-center gap-4 md:mt-3 text-zinc-800">
                            {[faInstagram, faWhatsapp, faTelegram, faGithub].map((icon, index) => (
                                <a key={index} href="#" aria-label="Social link" className="inline-block">
                                    <FontAwesomeIcon icon={icon} className="size-7 sm:size-9 rounded-full border-2 p-[5px] sm:p-[6px] border-black font-extralight" />
                                </a>
                            ))}
                        </ul>
                    </div>

                    <div className="text-center lg:text-left md:mt-0 mt-4">
                        <h1 className="font-bold text-lg sm:text-xl">Useful Links</h1>
                        <ul className="mt-3 space-y-2 sm:space-y-3">
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#how-we-work">How we work</a></li>
                            <li><a href="#terms">Terms & Conditions</a></li>
                            <li><a href="#faq">FAQ</a></li>
                        </ul>
                    </div>

                    <div className="text-center lg:text-left lg:mt-0 mt-4">
                        <h1 className="font-bold text-lg sm:text-xl">Content</h1>
                        <ul className="mt-3 space-y-2 sm:space-y-3">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#menu">Browse Menu</a></li>
                            <li><a href="#blog">Blog</a></li>
                        </ul>
                    </div>

                    <div className="text-center lg:text-left lg:mt-0 mt-4">
                        <h1 className="font-bold text-lg sm:text-xl">Address</h1>
                        <ul className="mt-3 space-y-2 sm:space-y-3">
                            <li>123 Construction Avenue</li>
                            <li><a href="mailto:testemail@gmail.com">testemail@gmail.com</a></li>
                            <li><a href="tel:888-123-42278">888-123-42278</a></li>
                        </ul>
                    </div>
                </div>

                <span className="text-center block lg:mt-6 mt-10 mb-3 text-sm sm:text-base">
                    Copyright © 2025 All rights reserved
                </span>
            </footer>
        </>
    );
}