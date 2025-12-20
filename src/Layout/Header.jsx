import React, { useCallback, useState } from 'react'

import logo from'../assets/icon.png'
import { IoNotificationsOutline } from "react-icons/io5";
import { dataProvider } from '../Components/ContextProvider';
import NavBaar from './NavBaar';

const Header = () => {


  const {input,inputSet,search}=dataProvider()





  return (


    <div className='w-full fixed  top-0 z-50'>
<header 

className=' text-white  bg-[#1a1e23]

 '




>


  <div 
className=' max-w-[1300px] mx-auto

px-[20px]
py-[15px]


flex flex-col items-center justify-between

md:flex-row


'>

<div>

  <img src={logo}  alt="logo" 
  
  className='w-[150px]'
  
  />
</div>


<div className='flex gap-4 items-center'>
<input type="text"


className='bg-[#1c232a]
rounded-[8px] h-8 border-[1px] p-1 text-center' 


value={input} onChange={(e)=>{


  inputSet(e.target.value)

  search(e.target.value)
}}
/>

<button className='relative'>
  <IoNotificationsOutline className='text-[20px]' />

  <div className='w-[15px] h-[15px] 
absolute flex justify-center items-center bg-[blue] text-[10px] rounded-full
top-[-5px]
left-3'

  
  
  >1</div>
</button>
</div>

</div>



</header>


<NavBaar/>

</div>
  )
}

export default Header
