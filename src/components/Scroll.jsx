import React from 'react'

export default function Scroll({ data }) {


    
  return (
    <div class="logos flex">
      <div class="logos-slide ">
      {
        data.map((item) => (
            <div className='text-white flex justify-center items-center'>
                <img src={item.image} alt="" width={19} className='py-1 pr-1 inline-block '/>
                {item.name} 
                {item.price_change_percentage_24h > 0 ? (
                    <span className='text-green-500 mx-2'>{item.price_change_percentage_24h.toFixed(2)}</span>
                ) : (
                    <span className='text-red-500 mx-2'>{item.price_change_percentage_24h.toFixed(2)}</span>
                )}
            </div>
        ))
    }
        </div>
        
      <div class="logos-slide">
      {
        data.map((item) => (
            <div className='text-white flex justify-center items-center'>
                <img src={item.image} alt="" width={19} className='py-1 pr-1 inline-block '/>
                {item.name} 
                {item.price_change_percentage_24h > 0 ? (
                    <span className='text-green-500 mx-2'>{item.price_change_percentage_24h.toFixed(2)}</span>
                ) : (
                    <span className='text-red-500 mx-2'>{item.price_change_percentage_24h.toFixed(2)}</span>
                )}
            </div>
        ))
    }
        </div>
  </div>
  )
}
