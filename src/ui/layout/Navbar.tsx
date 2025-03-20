// /* eslint-disable react-hooks/rules-of-hooks */

// "use client";
// import React from 'react';
// import { useLocation } from 'react-router-dom';

// import { NavLink as Link } from "react-router-dom";
// import styled from "styled-components";

// // import logo from '../images/logo.png';
// import Image from 'next/image';


// const NavLink = styled(Link)`
//     color: #808080;
//     display: flex;
//     align-items: center;
//     text-decoration: none;
//     padding: 0 1rem;
//     height: 100%;
//     cursor: pointer;
//     &.active {
//         color: #4d4dff;
//     }
// `;

// function Navbar() {
//     return (
//         <nav id='navbar' className="flex justify-between items-center px-14 z-10">
//             <a href="#" className="navbar-brand w-3/12">
//                 <NavLink className='font-medium' to="/" >
//                     {/* <Image src={logo} alt="logo" className='mt-2' /> */}
//                     <Image className="rounded-lg" src="/images/7459344.jpg" alt="Logo" width={100} height={100} />

//                 </NavLink>
//             </a>
//             <ul className="navbar-nav flex items-center justify-center -mt-1 w-6/12">
//                 <NavLink className='font-medium' to="/" >
//                     Home
//                 </NavLink>
//                 <NavLink className='font-medium' to="/menu" >
//                     {/* <StaggeredDropDown /> */}
//                     Menu
//                 </NavLink>
//                 <NavLink className='font-medium' to="/about" >
//                     About Us
//                 </NavLink>
//                 <NavLink className='font-medium' to="/contact" >
//                     Contact
//                 </NavLink>
//                 <NavLink className='font-medium' to="/reservations" >
//                     Reservations
//                 </NavLink>
//             </ul>
//             <div className="w-3/12 h-12 text-end z-[2]">
//                 {(() => {
//                     const location = useLocation();
//                     if (location.pathname !== '/') {
//                         return (
//                             <>
//                                 <a href="#" className='hover:opacity-60 z-10 transition-opacity inline-block'>
//                                     <i className="fa-solid fa-bag-shopping fa-2xl text-[#2E1B1B] me-5" />
//                                 </a>
//                                 <button type="button" className='text-lg font-medium border-2 border-[#2E1B1B] bg-white text-[#2E1B1B] rounded py-1 px-2 mx-1'>Sing up</button>
//                                 <button type="button" className='text-lg font-medium border-2 border-[#2E1B1B] text-white bg-[#2E1B1B] rounded py-1 px-2 mx-1'>Sing in</button>
//                             </>
//                         )
//                     } else {
//                         return (
//                             <>
//                                 <a href="#" className='hover:opacity-60 z-10 transition-opacity inline-block'>
//                                     <i className="fa-solid fa-bag-shopping fa-2xl text-white me-5" />
//                                 </a>
//                                 <button type="button" className='text-lg font-medium border-2 border-white text-[#F53D37] bg-white rounded py-1 px-2 mx-1'>Sing up</button>
//                                 <button type="button" className='text-lg font-medium border-2 border-white text-white rounded py-1 px-2 mx-1'>Sing in</button>
//                             </>
//                         )
//                     }
//                 })()}
//             </div>
//         </nav>
//     );
// }


// export default Navbar;




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
