import React from 'react'
import add1 from "../image/ad-1.jpg"
import add2 from "../image/add2.jpg"
import add3 from "../image/add3.jpg"
import add4 from "../image/add4.jpg"

export default function CoinAds() {
  return (
    <div className='flex flex-col justify-center mt-2 mb-2 lg:ml-64'>
      <div className='flex justify-center'>
        <div className=' w-full lg:w-[1022px]  bg-white flex justify-center items-center m-2'id='ad-1' > <img src={add1} alt="" /></div>
      </div>
      <div className='flex justify-center  overflow-x-auto'>
        <div className='w-full md:w-[600px]  bg-black flex justify-center items-center m-2 ' > <img src={add2} alt="" /></div>
        <div className=' md:block w-[600px] hidden bg-black lg:flex justify-center items-center m-2 ' > <img src={add3} alt="" /> </div>
        <div className=' md:block w-[600px] hidden  bg-black lg:flex justify-center items-center m-2 ' > <img src={add4} alt="" /></div>
      </div>
    </div>
  )
}
