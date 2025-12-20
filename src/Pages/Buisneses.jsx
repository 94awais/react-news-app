import React from 'react'
import { useLoaderData } from 'react-router-dom'

import Card from '../Components/Card'
import { dataProvider } from '../Components/ContextProvider'
import NotFound from './NotFound'

const Buisneses = () => {

  
  const data=useLoaderData()
   const {news}=dataProvider()


  console.log(data)
   

  return (
    <div>
     {


news.status==="ok" && <Card  home={news.articles}/>
       }



{news.status!=='ok' && <Card  home={data.articles}/> }

       {


news?.articles?.length===0 &&  <NotFound/>
       }

    </div>
  )
}

export default Buisneses
