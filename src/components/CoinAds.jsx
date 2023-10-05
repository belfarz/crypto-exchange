import React from 'react'

export default function CoinAds() {
  return (
    <div className='flex flex-col justify-center mt-12 mb-6 lg:ml-64'>
      <div className='flex justify-center'>
        <div className=' w-full lg:w-2/4 h-28 bg-white flex justify-center items-center m-2' ><h1>TOP ADVERT</h1> </div>
      </div>
      <div className='flex justify-center  overflow-x-auto'>
        <div className='w-full md:w-1/3  h-48 bg-white flex justify-center items-center m-2 ' ><h1>Left ADVERT</h1> </div>
        <div className=' md:block w-1/3 hidden h-48 bg-white lg:flex justify-center items-center m-2 ' ><h1>Middle ADVERT</h1> </div>
        <div className=' md:block w-1/3 hidden  h-48 bg-white lg:flex justify-center items-center m-2 ' ><h1> ADVERT</h1> </div>
      </div>
    </div>
  )
}
