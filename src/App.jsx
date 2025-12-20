import React, { lazy } from 'react'
import {ContextProvider} from './Components/ContextProvider'
import AppLayout from './Layout/AppLayout'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'

 const Home = lazy(() => import("./Pages/Home"));
 const Buisneses = lazy(() => import("./Pages/Buisneses"));
 const Entertenment = lazy(() => import("./Pages/Entertenment"));
 const General = lazy(() => import("./Pages/General"));
 const Health = lazy(() => import("./Pages/Health"));
 const  Sports = lazy(() => import("./Pages/Sports"));
 const   Technology = lazy(() => import("./Pages/Technology"));
 const  ErrorPage= lazy(() => import("./Pages/ErrorPage"));



const App = () => {






  const routes=createBrowserRouter([
    
    
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
    
      children:[
        {path:"/",
          
          element:<Home/>
          ,
      errorElement:<ErrorPage/>,

      loader:()=>fetch("https://newsapi.org/v2/everything?q=pakistan&apiKey=7a2273733d9a40b081b546392eac0e0a"),


        },

         {path:"buisneses",
          
          element:<Buisneses/>
          ,
      errorElement:<ErrorPage/>,

      
      loader:()=>fetch("https://newsapi.org/v2/everything?q=buisness&apiKey=7a2273733d9a40b081b546392eac0e0a"),




        },


        {path:"entertenment",
          
          element:<Entertenment/>
          ,
      errorElement:<ErrorPage/>,

      
      loader:()=>fetch("https://newsapi.org/v2/everything?q=entertainment&apiKey=7a2273733d9a40b081b546392eac0e0a"),




        },

        {path:"general",
          
          element:<General/>
          ,
      errorElement:<ErrorPage/>,


      
      loader:()=>fetch("https://newsapi.org/v2/everything?q=general&apiKey=7a2273733d9a40b081b546392eac0e0a"),




        },


        {path:"health",
          
          element:<Health/>
          ,
      errorElement:<ErrorPage/>,


      
      loader:()=>fetch("https://newsapi.org/v2/everything?q=health&apiKey=7a2273733d9a40b081b546392eac0e0a"),


        },


        
        {path:"sports",
          
          element:<Sports/>
          ,
      errorElement:<ErrorPage/>,

      
      loader:()=>fetch("https://newsapi.org/v2/everything?q=sports&apiKey=7a2273733d9a40b081b546392eac0e0a"),


        },

                
        {path:"technology",
          
          element:<Technology/>
          ,
      errorElement:<ErrorPage/>,
      
      loader:()=>fetch("https://newsapi.org/v2/everything?q=technology&apiKey=7a2273733d9a40b081b546392eac0e0a"),



        },
      ]

    },

    
  
  ])


  return (
    <>
    <ContextProvider>

     <RouterProvider router={routes}/>

    </ContextProvider>
    
    </>
  )
}

export default App
