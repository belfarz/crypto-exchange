import React from 'react'

export default function Scroll({ data, metadata }) {

  const dataArray = data && Object.values(data)
  const metaData = metadata && Object.values(metadata)
  console.log("this is the scroll data",dataArray)
  console.log("this is the scroll metdata",metaData)
  return (
    <div class="logos flex">
      <div class="logos-slide ">
      { dataArray ? 
        dataArray.map((item, index) => (
            <div className='text-white flex justify-center items-center' key={index}>
                #{index + 1}
                <img src={metaData[index].logo} alt="" width={19} className='py-1 pr-1 inline-block m-2'/>
                {item.name} 
               {
                item.quote.USD.percent_change_1h != null ?
                (item.quote.USD.percent_change_1h > 0 ? (
                    <span className='text-green-500 mx-2'>{item.quote.USD.percent_change_1h.toFixed(2)}</span>
                ) : (
                    <span className='text-red-500 mx-2'>{item.quote.USD.percent_change_1h.toFixed(2)}</span>
                ))
                :   (
                    <span className='text-gray-500 mx-2'>N/A</span>
                  )
               }
            </div>
        )) : null
    }
        </div>
        
      <div class="logos-slide">
      { dataArray ? 
        dataArray.map((item, index) => (
            <div className='text-white flex justify-center items-center' key={index}>
                  #{index + 1}
                <img src={metaData[index].logo} alt="" width={19} className='py-1 pr-1 inline-block m-2'/>
                {item.name} 
               {
                item.quote.USD.percent_change_1h != null ?
                (item.quote.USD.percent_change_1h > 0 ? (
                    <span className='text-green-500 mx-2'>{item.quote.USD.percent_change_1h.toFixed(2)}</span>
                ) : (
                    <span className='text-red-500 mx-2'>{item.quote.USD.percent_change_1h.toFixed(2)}</span>
                ))
                :   (
                    <span className='text-gray-500 mx-2'>N/A</span>
                  )
               }
            </div>
        )) : null
    }
        </div>
  </div>
  )
}
