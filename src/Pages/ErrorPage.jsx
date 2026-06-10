import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Ui/Button'

const ErrorPage = () => {

   const navigate=useNavigate()


   
   function home() {


    navigate('/')
    
   }


   function redirect() {


    navigate(-1)
    
   }
  return (

    <>
<div className="w-full h-[calc(100vh-72px)] -mt-[180px] flex items-center justify-center px-4">
  <div className="max-w-lg w-full text-center">

    {/* 404 */}
    <h1
      className="
        text-5xl sm:text-6xl md:text-7xl
        font-extrabold
        tracking-[0.2em]
        text-transparent bg-clip-text
        bg-gradient-to-r from-[#F472B6] via-[#A78BFA] to-[#38BDF8]
      "
    >
      404
    </h1>

    {/* Title */}
    <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-[#E5E7EB]">
      Page Not Found
    </h2>

    {/* Description */}
    <p className="mt-2 text-sm sm:text-base text-[#9CA3AF] max-w-md mx-auto">
      The page you’re looking for doesn’t exist or has been moved.
    </p>

    {/* Actions */}
    <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">


      
      <button onClick={redirect}
        className="
          px-5 py-2
          text-sm sm:text-base
          rounded-lg
          border border-[#1F2937]
          text-[#E5E7EB]
          hover:bg-[#111827]
          transition
        "
      >
        Go Back
      </button>
      <button onClick={home}
        className="
          px-5 py-2
          text-sm sm:text-base
          rounded-lg
          text-white font-medium
          bg-gradient-to-r from-[#F472B6] via-[#A78BFA] to-[#38BDF8]
          hover:opacity-90 transition
        "
      >
        Go Home
      </button>

    </div>

  </div>
</div>


  </>
  )
}

export default ErrorPage
