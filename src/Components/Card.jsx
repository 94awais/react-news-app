import React from 'react'

const Card = ({home}) => {


    console.log(home)

  
  return (
    <ul className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1300px] mx-auto   '>

      { home && home.map((obj,index)=>{
   
  return( <li key={index}  className='shadow-2xl p-[10px] rounded-b-[10px] flex flex-col gap-8  hover:bg-[#eee] hover:scale-105  duration-300
   hover:rounded-t-3xl'>


    <img src={obj.urlToImage} alt="update" className='w-[100%] object-cover h-[200px] rounded-t-3xl'/>


 



{obj.description ? obj.description.length >100 ?obj.description.slice(0,100)+"....":obj.description:"no descripton"}

<a href={obj.url} target='_blank'><button className='px-[20px] rounded-[5px] text-white bg-[#5454fc]'>view</button></a>
    
 

    </li>


     ) })}
    
    </ul>
  )

}

export default Card
