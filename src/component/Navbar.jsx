import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import About from './About';
import { RiLoginBoxFill } from "react-icons/ri";
import { BiSolidRegistered } from "react-icons/bi";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = ()=>{
    setIsMenuOpen(false)
  }
  return (
    <nav className='sticky top-0 z-50  '>
      <div className="flex flex-wrap sm:flex-nowrap justify-between sm:justify-between items-center bg-[#610e4f] w-full gap-32  md:gap-155 lg:gap-8">

        <div className='nav-header mr-5'>
          <img src='https://i.pinimg.com/736x/e0/f4/ba/e0f4baaf2bf43934f69db75d4726f9fb.jpg' className='img w-[100%] h-[80px] p-[5px] rounded-2xl ' />
        </div>
        <ul className=' hidden text xl:flex xl:gap-20 items-center w-[45%] text-[21px] font-bold'>
          <NavLink to="/" className={({ isActive }) =>
          `${isActive ? "text-orange-600 underline":"text-gray-100"} ml-2`}>Home</NavLink>
          <NavLink to="About" className={({isActive}) =>
          `${isActive ? "text-orange-600 underline":"text-gray-100"} ml-2`}>About</NavLink>
         <NavLink to="Services" className={({isActive}) =>
          `${isActive ? "text-orange-600 underline":"text-gray-100"} ml-2`}>Services</NavLink>
          <NavLink to="Contact" className={({isActive}) =>
          `${isActive ? " text-orange-600 underline":"text-gray-100"} ml-2`}>Contact</NavLink>
          </ul>
          <div className='hidden xl:flex gap-3 items-center'>
          
            {/* <button className='button text-[#ffff] bg-[#150a06] hover:bg-[#845858] rounded-[7px] w-[25%]h-[45px] w-[20%] h-[40px]'>Admin</button> */}
            <Link to="Login" className='button text-[#ffff] bg-[#150a06] hover:bg-[#845858] rounded-[7px] w-[18%] h-[40px] px-3 py-2'>Login </Link>
            <Link to="Register" className='button py-2 px-2 text-[#ffff] bg-[#150a06] hover:bg-[#845858] rounded-[7px] w-[25%]h-[45px] w-[20%] h-[40px]'>Register</Link>
            <input type="text"placeholder='search..'className='input bg-[#ffff] px-2 rounded-[5px] w-[40%] h-[30px]'/>
          </div>
          <GiHamburgerMenu className='lg:hidden block text-5xl  text-white cursor-pointer'
          onClick={() => setIsMenuOpen(!isMenuOpen) }/></div>
          {/* Mobile Menu - Only Rendered When Open */}
      {isMenuOpen && (
        <div className="absolute xl:hidden top-[100px] left-0 w-full bg-red-800 flex flex-col items-center gap-6 font-semibold text-lg z-50">
          <NavLink to="/" className={({ isActive }) =>
            `${isActive ? "text-orange-600 underline" : "text-gray-100"} w-full text-center p-4 hover:bg-sky-800 hover:text-white transition-all cursor-pointer`
          } onClick={handleClick}>Home</NavLink>

          <NavLink to="/about" className={({ isActive }) =>
            `${isActive ? "text-orange-600 underline" : "text-gray-100"} w-full text-center p-4 hover:bg-sky-800 hover:text-white transition-all cursor-pointer`
          } onClick={handleClick}>About Us</NavLink>

          <NavLink to="/services" className={({ isActive }) =>
            `${isActive ? "text-orange-600 underline" : "text-gray-100"} w-full text-center p-4 hover:bg-sky-800 hover:text-white transition-all cursor-pointer`
          } onClick={handleClick}>Services</NavLink>

          <NavLink to="/contact" className={({ isActive }) =>
            `${isActive ? "text-orange-600 underline" : "text-gray-100"} w-full text-center p-4 hover:bg-sky-800 hover:text-white transition-all cursor-pointer`
          } onClick={handleClick}>Contact</NavLink>

          <Link to="/login" className="w-full flex items-center justify-center p-4 font-bold hover:bg-gray-700 hover:text-white transition-all cursor-pointer" onClick={handleClick}>
            <RiLoginBoxFill className="mr-2" /> Login
          </Link>

          <Link to="/register" className="w-full flex items-center justify-center p-4 font-bold hover:bg-gray-700 hover:text-white transition-all cursor-pointer" onClick={handleClick}>
            <BiSolidRegistered className="mr-2" /> Register
          </Link>
        </div>
      )}
    </nav >
  )
}

export default Navbar