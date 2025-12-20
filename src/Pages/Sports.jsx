import React from 'react'

import { data, useLoaderData } from 'react-router-dom'


import Card from '../Components/Card'
import { dataProvider } from '../Components/ContextProvider'
import NotFound from './NotFound'

const Sports = () => {


  const data=useLoaderData()
  const {news}=dataProvider()
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

export default Sports
