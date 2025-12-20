import React from 'react'
import { dataProvider } from '../Components/ContextProvider'
import  { lazy } from 'react'
const Header=lazy(()=>import("./Header"))
const Footer=lazy(()=>import("./Footer"))
const NavBaar=lazy(()=>import("./NavBaar"))
import { Outlet, useNavigation } from 'react-router-dom'

import { Suspense } from 'react'
import { ScaleLoader } from 'react-spinners'


const AppLayout = () => {



  const navigation=useNavigation()

    
  return (
   <>
   <Header/>
<Suspense fallback={<ScaleLoader />}>

{navigation.state==="loading"?<ScaleLoader  className='text-center absolute  top-36 md:top-30 left-1/2 -translate-x-1/2 mt-8'/>:<Outlet/>}

   </Suspense>
   <Footer/>
   
   </>
  )
}

export default AppLayout
