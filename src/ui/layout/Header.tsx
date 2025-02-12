import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import ThreeDModel from "@/app/components/3D-modulse";
// import { faPlus } from '@fortawesome/free-regular-svg-icons';

export default function Header() {
    const profileTeamImage = ["amy-burns", "balazs-orban", "delba-de-oliveira", "evil-rabbit", "lee-robinson", "michael-novotny"];
    return (
        <header className="relative">
            <div className="p-5 flex justify-between z-10">
                <h1 className="font-black text-7xl w-3/5 leading-tight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <div className="w-1/4 m-auto text-center">
                    <Image className="w-80" src="/images/7459344.jpg" alt="Header Image" width={200} height={200} />
                </div>
            </div>
            <div className="flex justify-between items-center relative w-full">
                <Image className="w-3/5 rounded-xl relative -left-10" src="/images/header-image.jpg" alt="Main" width={500} height={300} />
                {/* <ThreeDModel /> */}
                <div className="w-2/5 flex flex-col justify-between absolute right-0 h-full">
                    <div className="mt-6">
                        <h2 className="font-extrabold text-5xl mb-3">Our Team</h2>
                        <p className="font-medium text-xl">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, at. Blanditiis rerum vero magni labore corrupti incidunt voluptate, deserunt distinctio harum reprehenderit esse corporis similique cum nisi enim voluptas sed?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                        </p>
                        <div className="flex items-center mt-5 cursor-pointer">
                            {profileTeamImage.map((name) => (
                                <Image key={name} className="rounded-full border-2 border-orange-500 p-[2px] size-16 -me-4 hover:mx-6 hover:me-2 transition-all duration-500"
                                    src={`/images/person/${name}.png`} alt="Person" width={64} height={64} />
                            ))}
                            <div className="flex justify-center items-center rounded-full bg-orange-500 text-white border-2 border-white p-[2px] size-16 -me-4 hover:mx-6 hover:me-2 transition-all duration-500">
                                <FontAwesomeIcon icon={faPlus} className="size-9 font-extralight" />
                            </div>
                        </div>
                    </div>
                    <div className="flex font-semibold text-lg capitalize mb-6">
                        <button className="p-3 px-6 bg-orange-500 text-white rounded-full">Contact Us</button>
                        <button className="p-3 px-6 ms-6 border-2 border-orange-500 text-orange-500 rounded-full">About Us</button>
                    </div>
                </div>
            </div>
        </header>
    );
}
