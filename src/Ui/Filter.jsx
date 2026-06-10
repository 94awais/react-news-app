import React, { useRef, useState } from 'react'
import { dataProvider } from '../Components/ContextProvider'

const Filter = ({data}) => {


  

  





const [filter,setFilter]=useState("")
  
  return (
    <div className='absolute top-38 right-5' >

     
      <select name="" id="" className='w-[200px]' value={filter} onChange={(e)=>{
        
        setFilter(e.target.value)

        
      
      }} >

        <option value="">All</option>

       {data?.map((obj,index)=>{

        return <option  key={index}value={obj.author}>{obj.author}</option>
       })}
      </select>

     
    </div>
  )
}

export default Filter
