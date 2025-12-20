import React from 'react'




// routeIcons.js
import { AiFillHome } from "react-icons/ai";
import { MdBusinessCenter, MdMovie, MdHealthAndSafety, MdSportsSoccer, MdComputer } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const NavBaar = () => {
  return (
    <div className='w-full  bg-amber-300 mb-5  text-black'>

        <nav className='flex max-w-[900px] mx-auto text-3xl gap-20 p-[8px] overflow-auto '>


   <div className='flex flex-col items-center shrink-0'>
            <NavLink to="/"> <AiFillHome/></NavLink>

              <p className='text-[12px]'>Home</p>
             
             </div>
            
   <div className='flex flex-col items-center shrink-0'>
            <NavLink to="/buisneses"> <MdBusinessCenter /></NavLink>

                <p className='text-[12px]'>Buisneses</p>
           
            </div>

              <div className='flex flex-col items-center'>
            <NavLink to="/entertenment"> <MdMovie /></NavLink>

             <p className='text-[12px]'>Entertenment</p>

             </div>

              <div className='flex flex-col items-center'>
            <NavLink to="/general"> <FaGlobe /></NavLink>

             <p className='text-[12px]'>General</p>

            </div>

   <div className='flex flex-col items-center shrink-0'>
            <NavLink to="/health"> <MdHealthAndSafety /></NavLink>

             <p className='text-[12px]'>Health</p>
            </div>
   <div className='flex flex-col items-center shrink-0'>
            <NavLink to="/sports"> <MdSportsSoccer /></NavLink>
             <p className='text-[12px]'>Sports</p>

            </div>
   <div className='flex flex-col items-center shrink-0'>
            <NavLink to="/technology"> <MdComputer /></NavLink>
             <p className='text-[12px]'>Technology</p>

            </div>
        </nav>
      
    </div>
  )
}

export default NavBaar
