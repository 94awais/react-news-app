import React from 'react'
import { dataProvider } from '../Components/ContextProvider'

const PoorConnection = () => {


const {error}=dataProvider()


console.log(error)
    
  return (
     <div className='h-[calc(100vh-200px)]  flex items-center   max-w-[1300px] mx-auto justify-center'>

 <p>{error.current.message}</p>
 <h1>hello</h1>
{/* 
      <img  className='w-full object-cover' src={"https://global.discourse-cdn.com/brave/original/3X/5/c/5c0430cfd38aec0d8b07a9013036ddf006d88aba.png"} alt="no result" /> */}

  
    </div>
  )
}

export default PoorConnection
