import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLoaderData,useLocation, useParams } from 'react-router-dom'
import Chart from "./Chart"
import { getCoin } from './api'
// import History from './History'
import CoinAds from './CoinAds'


export function loader({params}) {
    console.log(params.id)
    return getCoin(params.id)
}

export default function CoinDetails() {

  const location = useLocation()
  const type = location.state.type
  const params = useParams()

  const [data, setData] = useState({})

  useEffect(()=>{
    const fetchData = async () =>{
      try {
        const response = await axios.post('https://kojocalls.onrender.com/api/metadata', {
          coinIds: params.id, // Array of coin slugs
        });
  
        setData(response.data.data);
        console.log(response)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  },[params.id])

    const coinData = useLoaderData()
    console.log(Object.values(data)) 
  return (
    <div className='flex-col overflow-x-auto w-full '>
       <CoinAds />
    <div className='flex flex-col justify-start items-start lg:ml-64 mt-[20px] w-full  p-2' id='coindetails'> 
      <div className="flex">
        <div className="flex mr-10">
            <div className=''><img src={coinData?.image.large} alt="" width={100} height={100}/></div>
            <div className="flex flex-col justify-center m-5">
                <span className='text-white text-3xl'>{coinData?.name}</span>
                <span className='text-white text-lg'>{coinData?.symbol}</span>
            </div>
        </div>
        <div className="flex flex-col justify-center">
            <span className='text-gray-400 text-lg'>Price</span>
            <span className='text-white text-3xl'>${coinData?.market_data.current_price.usd}</span>
        </div>
      </div>

      <div className='mb-4'>
        <p className='text-white text-start' dangerouslySetInnerHTML={{__html : coinData?.description.en}}></p>
      </div>

      {/* <History /> */}
      <Chart name={coinData?.symbol} type={type ? type : ""}/>
    </div>
    </div>
  )
}
