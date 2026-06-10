import React, { useState } from 'react'
import { dataProvider } from '../Components/ContextProvider'
import  { lazy } from 'react'
// const Header=lazy(()=>import("./Header"))
// const Footer=lazy(()=>import("./Footer"))
// const NavBaar=lazy(()=>import("./NavBaar"))

// const Header = lazy(()=>import('./Header')) 

import  Header from './Header'


import NavBaar from './NavBaar'
import Footer from './Footer'
import { Outlet, useNavigation } from 'react-router-dom'

import { Suspense } from 'react'
import { RingLoader, ScaleLoader } from 'react-spinners'
import Loader from '../Ui/Loader'
const  SideBaar= lazy(()=>import('../Ui/SideBaar')) 




import ParticularProtectedRoute from '../Components/ParticularProtectedRoute'


// import  SideBaar from '../Ui/SideBaar'


const AppLayout = () => {


const [enable,setEnable]=useState(false)


const navig=useNavigation();



 
    
  return (
   <>
   

   
  <Header enable={enable} setEnable={setEnable}/>
<NavBaar/>

{ enable &&
(<ParticularProtectedRoute>
 <Suspense fallback={null}>

  <SideBaar/>
  </Suspense>
</ParticularProtectedRoute>)

}



<Suspense fallback={  <div className="h-screen flex  w-full  justify-center"><RingLoader  color="#34e7ec" size={70} /></div>}> 





{ navig.state==="loading"?<Loader/>:<Suspense fallback={null}><Outlet/></Suspense>}



    </Suspense> 
     <Footer/>
  
   
   </>
  )
}

export default AppLayout
