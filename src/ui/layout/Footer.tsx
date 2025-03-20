import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <>
            <div className="border-t border-black/40 mt-8"></div>
            <footer className="mt-6 relative m-auto container">
                <div className="flex pt-5">
                    <div className='basis-1/4 relative -mt-3'>
                        <Image width={120} height={120} className='m-auto filter grayscale' src={'/images/7459344.jpg'} alt="" />
                        <ul className='px-10 flex items-center justify-evenly text-zinc-800'>
                            <FontAwesomeIcon icon={faInstagram} className="mx-1 size-9 rounded-full border-2 p-[6px] border-black font-extralight" />
                            <FontAwesomeIcon icon={faWhatsapp} className="mx-1 size-9 rounded-full border-2 p-[6px] border-black font-extralight" />
                            <FontAwesomeIcon icon={faTelegram} className="mx-1 size-9 rounded-full border-2 p-[6px] border-black font-extralight" />
                            <FontAwesomeIcon icon={faGithub} className="mx-1 size-9 rounded-full border-2 p-[6px] border-black font-extralight" />
                        </ul>
                    </div>
                    <div className='basis-1/4 px-4 ps-14 text-[17px]'>
                        <h1 className='font-bold text-xl'>Useful Links</h1>
                        <ul className='mt-3 leading-[35px]'>
                            <li>About Us</li>
                            <li>How we work</li>
                            <li>Terms & Conditions</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className='basis-1/4 px-4 ps-14 text-[17px]'>
                        <h1 className='font-bold text-xl'>Content</h1>
                        <ul className='mt-3 leading-[35px]'>
                            <li>Home</li>
                            <li>Brows Menu</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className='basis-1/4 px-4 ps-14 text-[17px]'>
                        <h1 className='font-bold text-xl'>Address</h1>
                        <ul className='mt-3 leading-[30px]'>
                            <li>Lorem ipsum dolor St</li>
                            <li>testemail@gmail.com</li>
                            <li>888-123-42278</li>
                        </ul>
                    </div>
                </div>
                <span className='text-center block my-5'>Copyright © 2025 All rights reserved</span>

            </footer>
        </>
    )
}