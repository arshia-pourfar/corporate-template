import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <>
            <div className="border-t border-black/40 mt-8"></div>
            <footer className="mt-6 relative mx-auto container px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:pt-5">
                    {/* بخش لوگو و شبکه‌های اجتماعی */}
                    <div className="text-center">
                        <Image width={100} height={100} className="mx-auto filter grayscale md:w-auto md:h-auto w-32" src={'/images/7459344.jpg'} alt="" />
                        <ul className="flex justify-center gap-4 md:mt-3 text-zinc-800">
                            {[faInstagram, faWhatsapp, faTelegram, faGithub].map((icon, index) => (
                                <FontAwesomeIcon key={index} icon={icon} className="size-7 sm:size-9 rounded-full border-2 p-[5px] sm:p-[6px] border-black font-extralight" />
                            ))}
                        </ul>
                    </div>

                    {/* بخش لینک‌های مفید */}
                    <div className="text-center lg:text-left md:mt-0 mt-4">
                        <h1 className="font-bold text-lg sm:text-xl">Useful Links</h1>
                        <ul className="mt-3 space-y-2 sm:space-y-3">
                            <li>About Us</li>
                            <li>How we work</li>
                            <li>Terms & Conditions</li>
                            <li>FAQ</li>
                        </ul>
                    </div>

                    {/* بخش محتوایی */}
                    <div className="text-center lg:text-left lg:mt-0 mt-4">
                        <h1 className="font-bold text-lg sm:text-xl">Content</h1>
                        <ul className="mt-3 space-y-2 sm:space-y-3">
                            <li>Home</li>
                            <li>Browse Menu</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    {/* بخش آدرس */}
                    <div className="text-center lg:text-left lg:mt-0 mt-4">
                        <h1 className="font-bold text-lg sm:text-xl">Address</h1>
                        <ul className="mt-3 space-y-2 sm:space-y-3">
                            <li>Lorem ipsum dolor St</li>
                            <li>testemail@gmail.com</li>
                            <li>888-123-42278</li>
                        </ul>
                    </div>
                </div>

                {/* کپی‌رایت */}
                <span className="text-center block lg:mt-6 mt-10 mb-3 text-sm sm:text-base">
                    Copyright © 2025 All rights reserved
                </span>
            </footer>
        </>
    );
}