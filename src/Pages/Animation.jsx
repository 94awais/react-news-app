import React from 'react'
import Skeleton from 'react-loading-skeleton'

const Animation = () => {


    const arr=Array(20).fill(undefined)

return(
    
          <>
          {
            arr.map((el,index)=>{


                return(



                      <div key={index}>
 
<a href="" target='_blank'>



  <div className='border-b-2 flex items-center gap-3 cursor-pointer' >

<Skeleton circle={true} height={"70px"} width={"70px"} baseColor={'#1f2937'} highlightColor='#2b3442' className='w-[70px] h-[70px] object-cover rounded-full my-2'></Skeleton>



<div>
<div  height={"5px"} width={"5px"}   className=''><p></p></div>


<p >

  <Skeleton height={"10px"} width={"230px"}baseColor={'#1f2937'} className='#eee'><p></p> </Skeleton>
  <Skeleton height={"10px"} width={"230px"}baseColor={'#1f2937'}  className='bg-amber-100'><p></p> </Skeleton>

</p>

 </div>


  </div>


</a>



            </div>
                )
            })
          }
          </>
        )
   
}

export default Animation
