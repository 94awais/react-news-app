import React from 'react'




// routeIcons.js
import { AiFillHome } from "react-icons/ai";
import { MdBusinessCenter, MdMovie, MdHealthAndSafety, MdSportsSoccer, MdComputer } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { memo } from 'react';


const NavBaar = () => {



  console.log("nav baar mount hua")
  return (
    <div className='w-full

  bg-gradient-to-r
  from-[#0B1220]
  via-[#111827]
  to-[#0E1628]
  border-b border-[#1F2937]
  h-[72px]
  flex items-center

  absolute fixed

  z-50

  top-21
 
'>

        <nav className='flex max-w-[900px] mx-auto text-3xl gap-20 p-[8px] overflow-auto

        
        
        '>


   <div className='flex flex-col items-center shrink-0 px-4 py-2
    text-md
    text-[white]
    cursor-pointer
    rounded-md

    transition-colors duration-200
    hover:text-[#E5E7EB]
    hover:bg-[#1F2937]'>

       <NavLink to="/">
            <AiFillHome/>


            
     
           
            
            
            </NavLink>

            <p className='text-[12px]'>Home</p>

             
             
             </div>
            
   <div className='flex flex-col items-center shrink-0  px-4 py-2
    text-md
    text-[white]
    cursor-pointer
    rounded-md

    transition-colors duration-200
    hover:text-[#E5E7EB]
    hover:bg-[#1F2937]'
   
   
>
            <NavLink to="/buisneses" > <MdBusinessCenter className=''/></NavLink>

               
           
          

             <p className='text-[12px]'>Buisneses</p>
               </div>

              <div className='flex flex-col items-center px-4 py-2
    text-md
    text-[white]
    cursor-pointer
    rounded-md

    transition-colors duration-200
    hover:text-[#E5E7EB]
    hover:bg-[#1F2937]'>
            <NavLink to="/entertenment"> <MdMovie /></NavLink>

             <p className='text-[12px]'>Entertenment</p>

             </div>

              <div className='flex flex-col items-center px-4 py-2
    text-md
    text-[white]
    cursor-pointer
    rounded-md

    transition-colors duration-200
    hover:text-[#E5E7EB]
    hover:bg-[#1F2937]'>
            <NavLink to="/general"> <FaGlobe /></NavLink>

             <p className='text-[12px]'>General</p>

            </div>

   <div className='flex flex-col items-center shrink-0 px-4 py-2
    text-md
    text-[white]
    cursor-pointer
    rounded-md

    transition-colors duration-200
    hover:text-[#E5E7EB]
    hover:bg-[#1F2937]'>
            <NavLink to="/health"> <MdHealthAndSafety /></NavLink>

             <p className='text-[12px]'>Health</p>
            </div>
   <div className='flex flex-col items-center shrink-0 px-4 py-2
    text-md
    text-[white]
    cursor-pointer
    rounded-md

    transition-colors duration-200
    hover:text-[#E5E7EB]
    hover:bg-[#1F2937]'>
            <NavLink to="/sports"> <MdSportsSoccer /></NavLink>
             <p className='text-[12px]'>Sports</p>

            </div>
   <div className='flex flex-col items-center shrink-0 px-4 py-2
    text-md
    text-[white]
    cursor-pointer
    rounded-md

    transition-colors duration-200
    hover:text-[#E5E7EB]
    hover:bg-[#1F2937]'>
            <NavLink to="/technology"> <MdComputer /></NavLink>
             <p className='text-[12px]'>Technology</p>

            </div>
        </nav>
      
    </div>
  )
}

export default NavBaar
