
import React, { useContext, useState } from 'react'
import { useCallback,createContext } from 'react'

import intance from '../api/intance'

const context=createContext()


const myKey=import.meta.env.VITE_API_KEY

 
const dataProvider=()=>{


   const data=useContext(context)



   console.log(data)


   return data;



}

const ContextProvider = ({error,children}) => {



  
    const [input,inputSet]=useState("")
    const [news,setNews]=useState([])
    const [side,setSide]=useState([])
    const [isOpen,setOpen]=useState(false)
    const [real,setReal]=useState(true)
    const [unique,setUnique]=useState([])
    const [filter,setFilter]=useState("")


  


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
  
  
   const search= useCallback(debounce(getData,500),[]) 
  
  
  
   async function getData(value) {
  

    console.log(value)
  if(value){
    
  
    const res=await intance(`?q=${value}&apiKey=${myKey}`);
  
  
    const data=res.data
  
  
  setNews(data)
  
  }


  else{

    setNews([])
  }
  
    
   }
  
  
  
   
  


  return (
    <>

  <context.Provider value={{input,inputSet,search,news,setOpen,isOpen,setSide,side,real,setReal,error,unique,setUnique,filter,setFilter}}> {children} </context.Provider>





 
      
</>
  )
}

export  {ContextProvider,dataProvider}
