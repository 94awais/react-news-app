import React, { lazy, Suspense, useCallback, useState } from 'react'


import { IoNotificationsOutline } from "react-icons/io5";

import logo from '../assets/final1.png'
// const {IoNotificationsOutline}=lazy(()=>import('react-icons/io5')) 
import { dataProvider } from '../Components/ContextProvider';
import { useAuth0 } from "@auth0/auth0-react";





const NavBaar =lazy(()=>import('./NavBaar')) 





const Header = ({enable,setEnable}) => {



  


  
const {
    isLoading, // Loading state, the SDK needs to reach Auth0 on load
    isAuthenticated,
    error,
    loginWithRedirect ,// Starts the login flow
    logout,
    user, // User profile
  } = useAuth0();


  console.log(user?.name)

  const {input,inputSet,search,setOpen,real,setReal}=dataProvider()


console.log(search,input)


  return (


    <div className='w-full fixed  top-0 z-50'>
<header 

className='bg-[#0F172A] border-b border-[#1F2937]

 '




>


  <div 
className=' max-w-[1300px] mx-auto h-[84px]

px-[20px]
py-[15px]


flex flex-col items-center justify-between

md:flex-row


'>

<div className='flex justify-center items-center '>

  <div>

    <img src={logo} alt=""  width='80px' className=' hidden md:block ' />
  </div>
<h1 className=" max-[780px]:hidden
  text-2xl
  font-bold
  tracking-[0.25em]
  text-transparent
  bg-clip-text
  bg-gradient-to-r
  from-[#F472B6]
  via-[#A78BFA]
  to-[#38BDF8]
  select-none
">
  NEWS
</h1>


</div>


<div className='flex gap-4 items-center'>
<div className="p-[1.5px] rounded-[8px]
                  bg-gradient-to-r from-[#F472B6] via-[#A78BFA] to-[#38BDF8]">

    <input
      type="text"
      className="bg-[#1c232a]
                 rounded-[8px]
                 h-8
                 border-none
                 p-1
                 text-center
                 text-[#E5E7EB]
                 placeholder-[#9CA3AF]
                 outline-none"
      value={input}
      onChange={(e) => {
        inputSet(e.target.value)
        search(e.target.value)
      }}
    />

  </div>
{ !isAuthenticated&&

  <button   onClick={()=>loginWithRedirect()}
  className=" max-[360px]:hidden
    px-4 py-2
    rounded-full
    text-sm font-medium
    text-white

    bg-gradient-to-r from-[#F472B6] via-[#A78BFA] to-[#38BDF8]

    transition-all duration-300
    hover:opacity-90
    hover:scale-[1.04]
    active:scale-[0.96]
  "
>
 login
</button>





}
<button className='relative' onClick={()=>{
  
  setOpen(prev=>!prev)

  setReal(false)
  
  }}>
  <IoNotificationsOutline className='text-[20px]' onClick={()=>setEnable(true)} />
{ real&&
 <div
  className="
    w-[10px] h-[10px]
    absolute
    rounded-full
     bg-[red]

    top-[-3px]
    left-3
  "
></div>
}
</button>
</div>

</div>



</header>





</div>
  )
}

export default Header



