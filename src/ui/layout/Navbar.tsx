"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

const navbarList = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Service", link: "/service" },
    { title: "Project", link: "/project" },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    console.log(menuOpen);

    return (
        <nav id="navbar" className="flex items-center justify-between px-6 max-h-[15dvh] relative">
            <div className="flex items-center w-1/6">
                <Image className="rounded-lg" src="/images/7459344.jpg" alt="Logo" width={100} height={100} />
            </div>

            <button
                className="lg:hidden block p-2 text-gray-700 z-40"
            >
                <FontAwesomeIcon icon={faHamburger} onClick={() => setMenuOpen(!menuOpen)} />
            </button>

            <ul
                className={`menu flex flex-col lg:flex-row absolute z-20 lg:relative top-20 lg:top-auto left-0 w-full lg:w-auto bg-white shadow-sm lg:shadow-none transition-all duration-300 ease-in-out transform ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0 lg:opacity-100 lg:translate-y-0"}`}
            >
                {navbarList.map((item, index) => (
                    <li key={index} className="relative font-bold mx-1 text-center lg:text-left">
                        <Link
                            href={item.link}
                            className={`block px-4 py-3 lg:px-4 lg:py-2 text-[#2E1B1B] text-[17px] tracking-[1px] cursor-pointer transition duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-[#F53D37] after:rounded after:scale-0 after:transition-transform after:origin-right hover:after:scale-100 hover:after:origin-left ${pathname === item.link ? "font-bold text-[#F53D37] after:scale-100" : ""}`}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="hidden lg:block w-1/6 text-right">
                <button className="bg-black text-white py-3 px-6 text-base font-semibold rounded-full capitalize">
                    Test Button
                </button>
            </div>
        </nav>
    );
}














// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHamburger } from '@fortawesome/free-solid-svg-icons';

// const navbarList = [
//     { title: "Home", link: "/" },
//     { title: "About", link: "/about" },
//     { title: "Service", link: "/service" },
//     { title: "Project", link: "/project" },
//     { title: "Blog", link: "/blog" },
//     { title: "Contact", link: "/contact" },
// ];

// export default function Navbar() {
//     const pathname = usePathname();
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <nav id="navbar" className="flex items-center justify-between px-6 max-h-[15dvh]">
//             <div className="flex items-center w-1/6">
//                 <Image className="rounded-lg" src="/images/7459344.jpg" alt="Logo" width={100} height={100} />
//             </div>

//             <button
//                 className="lg:hidden block p-2 text-gray-700"
//                 onClick={() => setMenuOpen(!menuOpen)}
//             >
//                 <FontAwesomeIcon icon={faHamburger} />
//             </button>

//             <ul
//                 className={`menu lg:flex flex-col lg:flex-row absolute lg:relative top-16 lg:top-auto left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none transition-transform duration-300 ease-in-out ${menuOpen ? "translate-y-0" : "-translate-y-full lg:translate-y-0"}`}
//             >
//                 {navbarList.map((item, index) => (
//                     <li key={index} className="relative font-bold mx-1 text-center lg:text-left">
//                         <Link
//                             href={item.link}
//                             className={`block px-4 py-3 lg:px-4 lg:py-2 text-[#2E1B1B] text-[17px] tracking-[1px] cursor-pointer transition duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-[#F53D37] after:rounded after:scale-0 after:transition-transform after:origin-right hover:after:scale-100 hover:after:origin-left ${pathname === item.link ? "font-bold text-[#F53D37] after:scale-100" : ""}`}
//                         >
//                             {item.title}
//                         </Link>
//                     </li>
//                 ))}
//             </ul>

//             <div className="hidden lg:block w-1/6 text-right">
//                 <button className="bg-black text-white py-3 px-6 text-base font-semibold rounded-full capitalize">
//                     Test Button
//                 </button>
//             </div>
//         </nav>
//     );
// }






// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";

// const navbarList = [
//     { title: "Home", link: "/" },
//     { title: "About", link: "/about" },
//     { title: "Service", link: "/service" },
//     { title: "Project", link: "/project" },
//     { title: "Blog", link: "/blog" },
//     { title: "Contact", link: "/contact" },
// ];

// export default function Navbar() {
//     const pathname = usePathname();

//     return (
//         <nav id="navbar" className="flex justify-around items-center z-10 max-h-[15dvh]">
//             <div className="w-1/6 text-center">
//                 <Image
//                     className="rounded-lg"
//                     src="/images/7459344.jpg"
//                     alt="Logo"
//                     width={100}
//                     height={100}
//                 />
//             </div>
//             <ul className="menu flex justify-evenly w-3/6 px-6 font-bold navbar-nav">
//                 {navbarList.map((item, index) => (
//                     <li key={index} className="relative">
//                         <Link
//                             href={item.link}
//                             className={`relative px-4 py-2 text-[#2E1B1B] bg-transparent text-[17px] tracking-[1px] m-[0px_3px] p-[15px] cursor-pointer transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-[#F53D37] after:rounded after:scale-0 after:transition-transform after:origin-right hover:after:scale-100 hover:after:origin-left ${pathname === item.link ? "font-bold text-[#F53D37] after:scale-100" : ""
//                                 }`}
//                         >
//                             {item.title}
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//             <div className="w-1/6 text-right">
//                 <button className="bg-black text-white py-3 px-6 text-base font-semibold rounded-full capitalize">
//                     Test Button
//                 </button>
//             </div>
//         </nav>
//     );
// }