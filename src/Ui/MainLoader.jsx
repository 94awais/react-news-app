import React from 'react'



const MainLoader = () => {
  return (
 
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#07122b] z-[9999]">
      
      {/* Spinner */}
      <div className="relative">
        <div className="w-18 h-18 rounded-full border-4 border-white/10 border-t-purple-500 animate-spin"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            W
          </span>
        </div>
      </div>

      {/* Brand */}
      <h1 className="mt-6 text-3xl font-bold tracking-[10px] text-white">
        W NEWS
      </h1>

      {/* Loading Dots */}
      <div className="flex gap-2 mt-6">
        <div className="w-3 h-3 rounded-full bg-purple-500 animate-bounce"></div>
        <div
          className="w-3 h-3 rounded-full bg-purple-500 animate-bounce"
          style={{ animationDelay: "0.15s" }}
        ></div>
        <div
          className="w-3 h-3 rounded-full bg-purple-500 animate-bounce"
          style={{ animationDelay: "0.3s" }}
        ></div>
      </div>

      <p className="mt-4 text-gray-400 text-sm">
        Loading Latest News...
      </p>
    </div>



  )
}

export default MainLoader
