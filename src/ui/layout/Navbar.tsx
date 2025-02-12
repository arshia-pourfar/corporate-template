import Image from "next/image";

export default function Navbar() {
    const navbarList = ["Home", "About", "Service", "Project", "Blog", "Contact"];
    return (
        <nav className="flex justify-around items-center z-10">
            <div className="w-1/6 text-center">
                <Image className="rounded-lg" src="/images/7459344.jpg" alt="Logo" width={100} height={100} />
            </div>
            <ul className="menu flex justify-evenly w-3/6 px-6 font-bold">
                {navbarList.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <div className="w-1/6 text-right">
                <button className="bg-black text-white py-3 px-6 text-base font-semibold rounded-full capitalize">
                    Test Button
                </button>
            </div>
        </nav>
    );
}
