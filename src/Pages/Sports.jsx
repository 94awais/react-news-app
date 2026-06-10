import React, { lazy } from 'react'

import { data, useLoaderData } from 'react-router-dom'

const Card=lazy(()=>import("../Components/Card"))

// import Card from '../Components/Card'
import { dataProvider } from '../Components/ContextProvider'
import NotFound from './NotFound'
import PoorConnection from './PoorConnection'
import { Suspense } from 'react'

const Sports = () => {


  const data=useLoaderData()
  const {news,error}=dataProvider()



  
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

export default Sports
