import React from 'react'

import { IoArrowBack } from "react-icons/io5";

const Button = ({func}) => {
  return (
    <div >
      <button  className='flex items-center justify-center rounded-[8px] bg-[#228bbb] gap-1 py-[5px] px-[10px]'
      
      onClick={func}
      ><IoArrowBack/><span>Back</span></button>
    </div>
  )
}

export default Button
