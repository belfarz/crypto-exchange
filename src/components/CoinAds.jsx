import React from 'react'

export default function CoinAds() {
  return (
    <div className='flex flex-col justify-center mt-12 mb-2 lg:ml-64'>
      <div className='flex justify-center'>
        <div className=' w-full lg:w-[1022px] h-[115px] bg-white flex justify-center items-center m-2'id='ad-1' > </div>
      </div>
      <div className='flex justify-center  overflow-x-auto'>
        <div className='w-full md:w-[600px]  h-[240px] bg-white flex justify-center items-center m-2 ' ><h1>Left ADVERT</h1> </div>
        <div className=' md:block w-[600px] hidden h-[240px] bg-white lg:flex justify-center items-center m-2 ' ><h1>Middle ADVERT</h1> </div>
        <div className=' md:block w-[600px] hidden  h-[240px] bg-white lg:flex justify-center items-center m-2 ' ><h1> ADVERT</h1> </div>
      </div>
    </div>
  )
}
