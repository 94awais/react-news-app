import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { dataProvider } from "./ContextProvider";
import Filter from "../Ui/Filter";
import { useEffect } from "react";

const Card = ({home}) => {


 
  let navigate=useNavigate();

  
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  
   function getSingleData(obj,index){



localStorage.setItem("user",JSON.stringify(obj));
    
 navigate(`/unique/${index}`)

   }
  
  return (


    <div>



  
    <ul className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1300px] mx-auto  '>

     
      { home && home.map((obj,index)=>{
   
  return( <li key={index}  className='shadow-2xl p-[10px] rounded-b-[10px] flex flex-col gap-1.5   hover:scale-105  duration-300
   hover:rounded-t-3xl
    bg-[#111827]
  border border-[#1F2937]
  rounded-2xl
  overflow-hidden
  transition
  hover:border-[#6366F1]/40

  
   '>

   
    <img src={obj.urlToImage|| "https://www.stellarinfo.com/blog/wp-content/uploads/2024/09/How-to-Fix-Image-Not-available-Error.jpg"} loading='lazy'  width="400"
  height="250" alt={"news"}
    onError={(e) => {
    e.target.onerror = null;
    e.target.src =
      "https://www.stellarinfo.com/blog/wp-content/uploads/2024/09/How-to-Fix-Image-Not-available-Error.jpg";
  }}
  
    
    
    className='w-[100%] object-cover h-[200px] rounded-t-3xl'/>



<p>{obj.title? obj.title.length>30? obj.title.slice(0,30)+"....":obj.title+"":"no title here plz visit view and get info\nno descripton\n....."}</p>
 



<p className='text-[#22C55E] '>


  <span className=''>Published : </span>
  {new Date(obj.publishedAt
).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })}
</p>


<p className="text-[#9CA3AF] leading-relaxed">
  {obj.description
    ? obj.description.length > 50
      ? obj.description.slice(0, 50) + "..."
      : (
        <>
          {obj.description}
          <br />
          .............
        </>
      )
    : "No description"}
</p>

<button className='px-[20px] py-[3px] inline-block rounded-[5px] text-white bg-[#5454fc] hover:bg-[#6565e9]' onClick={()=>getSingleData(obj,index)}>view</button>
    
 

    </li>


     ) })}
    
    </ul>
    </div>
  )

}

export default Card
