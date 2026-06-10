import React, { lazy, Suspense, useEffect, useRef, useState } from 'react'
import {ContextProvider, dataProvider} from './Components/ContextProvider'

import { createBrowserRouter ,data,RouterProvider } from 'react-router-dom'

 const Home = lazy(()=>import("./Pages/Home"));
 const Buisneses = lazy(()=>import("./Pages/Buisneses"));
 const Entertenment = lazy(() => import("./Pages/Entertenment"));
 const General = lazy(()=>import("./Pages/General"));
 const Health = lazy(() => import("./Pages/Health"));
 const  Sports =lazy(()=>import("./Pages/Sports"));
 const   Technology = lazy(()=>import("./Pages/Technology"));
 const  ErrorPage= lazy(()=>import("./Pages/ErrorPage"));

  const AppLayout=lazy(()=>import("./Layout/AppLayout"))

//  import AppLayout from './Layout/AppLayout';

 import intance from './api/intance';
import Unique from './Pages/Unique';
import ProtectedRoute from './Components/ProtectedRoute';

import MainLoader from './Ui/MainLoader';



const App = () => {



  const  error=useRef(false)



  const myKey=import.meta.env.VITE_API_KEY




 

  const fetchData=async(value)=>{


    try{

  const res= await intance(`?q=${value}&apiKey=${myKey}`)

  error.current=false

  return res.data
  
  }catch(e){


    console.log("data")
error.current=e;
  
  }
}




  const routes=createBrowserRouter([


    
    
    {
      path:"/",
      element:(
      <Suspense fallback={<MainLoader/>}> <AppLayout/></Suspense>
     ),
      errorElement:<ErrorPage/>,

      

    
      children:[


       
       
    
        {
          path:"/",

          index:true,
          element:<Home/>
          ,
      errorElement:<ErrorPage/>,

      loader:()=>fetchData("cartoon"),
      


        },



        {

        

          children:[







            
          {
      path:"/unique/:id",
      element:<Unique/>,
      errorElement:<ErrorPage/>,

    
},

         {path:"buisneses",
          
          element:<Buisneses/>
          ,
      errorElement:<ErrorPage/>,

      
      loader:()=>fetchData("buisness"),




        },


        {path:"entertenment",
          
          element:<Entertenment/>
          ,
      errorElement:<ErrorPage/>,

      
      loader:()=>fetchData("entertainment"),




        },

        {path:"general",
          
          element:<General/>
          ,
      errorElement:<ErrorPage/>,


      
      loader:()=>fetchData("general"),




        },


        {path:"health",
          
          element:<Health/>
          ,
      errorElement:<ErrorPage/>,


      
      loader:()=>fetchData("health"),


        },


        
        {path:"sports",
          
          element:<Sports/>
          ,
      errorElement:<ErrorPage/>,

      
      loader:()=>fetchData("sports"),


        },

                
        {path:"technology",
          
          element:<Technology/>
          ,
      errorElement:<ErrorPage/>,
      
      loader:()=>fetchData("technology"),



        },
          ]






        }

      ]

    },
   
  ])


  return (
    <>
    <ContextProvider error={error}>

     <RouterProvider router={routes}/>

    </ContextProvider>
    
    </>
  )
}

export default App
