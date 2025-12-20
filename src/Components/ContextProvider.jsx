
import React, { useContext, useState } from 'react'
import { useCallback } from 'react'
import { createContext } from 'react'

const context=createContext()

 
const dataProvider=()=>{


   const data=useContext(context)


   return data;



}

const ContextProvider = ({children}) => {



  
    const [input,inputSet]=useState("")
    const [news,setNews]=useState([])
  


    console.log(news)
  
  
  
    console.log(input)
  
  
    function debounce(fn,delay){
  
  
  
      let timer=0;
  
      return function(...args){
  
  
        clearTimeout(timer)
  
  timer=setTimeout(()=>{
  
    fn(...args)
  },delay)
  
  
      }
  
  
  
    }
  
  
   const search= useCallback(debounce(getData,1000),[]) 
  
  
  
   async function getData(value) {
  
  
    
  
    const res=await fetch(`https://newsapi.org/v2/everything?q=${value}&apiKey=2dc3b6eb92f64f8fbade62280753d415`);
  
  
    const data=await res.json()
  
  
  setNews(data)
  
  
    
   }
  
  
  
   
  


  return (
    <>

  <context.Provider value={{input,inputSet,search,news}}> {children} </context.Provider>




 
      
</>
  )
}

export  {ContextProvider,dataProvider}
