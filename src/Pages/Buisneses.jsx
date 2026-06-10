import React, { lazy } from 'react'
import { useLoaderData } from 'react-router-dom'

// import Card from '../Components/Card'
const Card=lazy(()=>import("../Components/Card"))
import { dataProvider } from '../Components/ContextProvider'
import NotFound from './NotFound'
import PoorConnection from './PoorConnection'
import { Suspense } from 'react'



const Buisneses = () => {


 
  
  const data=useLoaderData()
   const {news,error}=dataProvider()

  console.log(news?.length)
  console.log(data?.articles.length)
    

  console.log(data)



  

  if(error.current){

     return <PoorConnection/>

  }
  
  
   

  return (
    <div>
     {


news.status==="ok" && <Suspense><Card  home={news?.articles}/>
      </Suspense> }



{news.status!=='ok' && <Suspense><Card  home={data?.articles}/> </Suspense>}
       {


news?.articles?.length===0 &&  <NotFound/>
       }

    </div>
  )
}

export default Buisneses
