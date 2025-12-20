import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Ui/Button'

const ErrorPage = () => {

   const navigate=useNavigate()



   function redirect() {


    navigate(-1)
    
   }
  return (

    <>

    
  <Button func={redirect}/>
   <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  max-w-[1300px] mx-auto'>



      <img  className='w-full object-cover' src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTrmKbeKkgAGYkBiKCVO6nO6E_7U9VpG_G6Q&s"} alt="no result" />



     
    </div>

  </>
  )
}

export default ErrorPage
