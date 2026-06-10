
import { useLoaderData } from 'react-router-dom'
// import Card from '../Components/Card'
import { dataProvider } from '../Components/ContextProvider'
import NotFound from './NotFound'
import PoorConnection from './PoorConnection'
import { lazy,Suspense} from 'react'
import { useEffect } from 'react'

const Card=lazy(()=>import("../Components/Card"))

const Home = () => {

  const data=useLoaderData()




  const {news,error}=dataProvider()


  console.log(news)


  if(error.current){

     return <PoorConnection/>

  }
  

  return (
    <div>

       {


news.status==="ok" &&  <Suspense><Card  home={news?.articles}/>
      </Suspense> }



{news.status!=='ok' && <Suspense><Card  home={data?.articles}/> </Suspense>}

       {

news?.articles?.length===0 &&  <NotFound/>
       }



      
     
    </div>
  )
}

export default Home
