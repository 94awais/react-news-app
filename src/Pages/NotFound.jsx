import React from 'react'
import { dataProvider } from '../Components/ContextProvider'

const NotFound = () => {


  const{inputSet,input,search}=dataProvider()


  console.log("not found mount hua")

  console.log(input)

  
  return (
   <div className="w-full flex items-center justify-center px-4 py-10">
  <div className="max-w-md w-full text-center">

    {/* Icon */}
    <div
      className="
        mx-auto mb-5
        w-16 h-16 sm:w-20 sm:h-20
        rounded-full
        bg-gradient-to-r from-[#F472B6] via-[#A78BFA] to-[#38BDF8]
        flex items-center justify-center
      "
    >
      <span className="text-2xl sm:text-3xl text-white">🔍</span>
    </div>

    {/* Title */}
    <h2
      className="
        text-lg sm:text-xl
        font-extrabold
        tracking-wide
        text-transparent bg-clip-text
        bg-gradient-to-r from-[#F472B6] via-[#A78BFA] to-[#38BDF8]
      "
    >
      NO RESULT FOUND
    </h2>

    {/* Description */}
    <p className="mt-2 text-sm sm:text-base text-[#9CA3AF]">
      We couldn’t find any news matching your search.
      Try different keywords.
    </p>

    {/* Action (optional) */}
    <div className="mt-5 flex justify-center">
      <button  onClick={()=>{

      inputSet('');

      search('');
      }}
        className="
          px-4 py-2
          text-sm font-medium
          rounded-lg
          text-white
          bg-gradient-to-r from-[#F472B6] via-[#A78BFA] to-[#38BDF8]
          hover:opacity-90
          transition
        "
      >
        Reset Search
      </button>
    </div>

  </div>
</div>

  )
}

export default NotFound
