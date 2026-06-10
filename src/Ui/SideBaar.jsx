import React, { lazy, Suspense, use, useEffect, useRef } from 'react'
import { dataProvider } from '../Components/ContextProvider'
import intance from '../api/intance'
import PoorConnection from '../Pages/PoorConnection'
import { memo } from 'react'


const Animation=lazy(()=>import("../Pages/Animation"))

 import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom'


const SideBaar = () => {



  
const navigate=useNavigate()
 

  
const {
    isLoading, // Loading state, the SDK needs to reach Auth0 on load
    isAuthenticated,
    
    loginWithRedirect ,// Starts the login flow
    logout,
    user, // User profile
  } = useAuth0();



    const {setOpen,isOpen,setSide,side,setReal,real,error}=dataProvider()

    let ref=useRef(true)
     
    

    

   


  
  const myKey=import.meta.env.VITE_API_KEY
  
useEffect(() => {

  let interval;

  async function fetchData() {

       try{    

    console.log("fetchiing..")
    const res = await intance(
      `?q=india&sortBy=publishedAt&apiKey=${myKey}`
    );
    const data = res.data

    setSide(prev => {

        
      if (prev.length === 0) {

         console.log("length")
       
        return data.articles;
      }

      const oldLatest = prev[0]?.publishedAt;
      const newLatest = data.articles[0]?.publishedAt;

      if (newLatest !== oldLatest) {

        console.log("update")
        setReal(true);  
        return data.articles;
      } else {
       
         console.log("no update")
        return prev;
      }
    });

  }catch(e){

console.log(e)




  }
  
  }



  if(ref.current){

   

 fetchData();

 ref.current=false;
  }
  
  


  if(!real){

    console.log("real")

  interval = setInterval(fetchData,4*60*1000); 
 
  }

  
  return () => {
    if (interval) {
      clearInterval(interval);
      console.log("interval cleared");
    }
  };
 


}, [real]);




  return (

    <div
  className={`
    fixed
    top-43 md:top-35
    left-[100%]
    h-full
    w-full md:w-[500px]
    z-50
    bg-[#0F172A]
    text-white
    transition-transform duration-500
    flex flex-col

    overflow-hidden
    ${isOpen ? "-translate-x-full" : "translate-x-0"}
  gap-1.5`}
>

  {/* ================= USER PROFILE (STICKY TOP) ================= */}
  <div className="shrink-0 px-4 py-4 border-b border-[#1F2937] bg-[#0F172A]">
    <div className="flex items-center justify-between mt-4">

      {/* Avatar + Name */}
      <div className="flex items-center gap-3">
       { isAuthenticated ?<div
          className="
           rounded-full
           
            flex items-center justify-center
            text-sm font-semibold text-white
          "
        >
          <img src={`${user.picture}?v=${Date.now()}`} alt="userProfile" className='object-cover rounded-full   w-10 h-10'
          
          onError={(e)=>{

            e.currentTarget.src="https://i.pinimg.com/736x/93/e8/d0/93e8d0313894ff752ef1c6970116bad6.jpg"
          }}
          
          />
        </div>
       
       
       
       
       
       
       
       :<div
          className="
            w-10 h-10 rounded-full
            bg-gradient-to-r from-[#F472B6] via-[#A78BFA] to-[#38BDF8]
            flex items-center justify-center
            text-sm font-semibold text-white
          "
        >
          U
        </div>
}
        <div className="leading-tight">
          <p className="text-sm font-medium text-[#E5E7EB]">{user.name}</p>



             <div className='flex items-center gap-2'>

               <p className="text-xs text-[#9CA3AF]">Logged in</p>

<div className=' h-2 w-2 rounded-full bg-green-400 '>
            
            </div>
             </div>

          
         


         

         
          
        </div>
      </div>

      {/* Logout */}
      <button  onClick={()=>{
        
        logout();

        navigate('/')
      
      }}
        className="
          px-3 py-1.5 text-xs
          rounded-full
          border border-[#1F2937]
          bg-[#111827]
          hover:bg-[#1F2937]
          transition
        "
      >
        Logout
      </button>

    </div>
  </div>
  {/* ============================================================= */}


  {/* ================= TRENDING HEADER ================= */}
  <div className="shrink-0 px-6 pt-4 pb-3 border-b border-[#1F2937]">
    <h2 className="text-lg font-semibold tracking-wide
                   text-transparent bg-clip-text
                   bg-gradient-to-r from-[#F472B6] via-[#A78BFA] to-[#38BDF8]">
      TRENDING NEWS
    </h2>
  </div>
  {/* =================================================== */}


  {/* ================= SCROLLABLE NEWS LIST ================= */}
  <div className="flex-1 overflow-auto px-3 pb-40">

    {
      !side.length ? (
        <Suspense>
          <Animation />
        </Suspense>
      ) : (
        side.map((obj, index) => (
          <a
            key={index}
            href={obj.url}
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center gap-3
              py-3
              border-b border-[#1F2937]
              hover:bg-[#111827]
              transition
            "
          >

            <img
              loading="lazy"
              src={obj.urlToImage || "https://www.stellarinfo.com/blog/wp-content/uploads/2024/09/How-to-Fix-Image-Not-available-Error.jpg"}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://www.stellarinfo.com/blog/wp-content/uploads/2024/09/How-to-Fix-Image-Not-available-Error.jpg";
              }}
              alt="update"
              className="w-[64px] h-[64px] object-cover rounded-full"
            />

            <div className="flex flex-col gap-1">
              <p className="text-sm leading-snug">
                {obj.title
                  ? obj.title.length > 32
                    ? obj.title.slice(0, 32) + "..."
                    : obj.title
                  : "No title available"}
              </p>

              <p className="text-xs text-[#9CA3AF]">
                {new Date(obj.publishedAt).toLocaleString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>

          </a>
        ))
      )
    }

  </div>
  {/* ========================================================== */}

</div>
  )
}

export default memo(SideBaar)
