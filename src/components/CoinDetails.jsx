import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useParams } from 'react-router-dom'
import Chart from "./Chart"
// import History from './History'
import CoinAds from './CoinAds'



export default function CoinDetails() {

  const location = useLocation()
  const type = location.state.type
  const params = useParams()

  const [data, setData] = useState({})
  const [meta, setMeta] = useState({})

  useEffect(()=>{
    const fetchData = async () =>{
      try {
        const response = await axios.post('https://kojocalls.onrender.com/api/coinmarketcap', {
          coinIds: params.id, // Array of coin slugs
        });
        const metadata = await axios.post('https://kojocalls.onrender.com/api/metadata', {
            coinIds: params.id, // Array of coin slugs
          });
  
        setData(response.data.data);
        setMeta(metadata.data.data);
        console.log(response)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  },[params.id])
 
  const dataArray = data && Object.values(data)
  const metadata = meta && Object.values(meta)
  return (
    <div className='flex-col overflow-x-auto w-full '>
       <CoinAds />
    <div className='flex flex-col justify-start items-start lg:ml-64 mt-[20px] w-full  p-2' id='coindetails'> 
      <div className="flex">
        <div className="flex mr-10">
            <div className=''><img src={metadata[0]?.logo} alt="" width={100} height={100}/></div>
            <div className="flex flex-col justify-center m-5">
                <span className='text-white text-3xl'>{metadata[0]?.name}</span>
                <span className='text-white text-lg'>{metadata[0]?.symbol}</span>
            </div>
        </div>
        <div className="flex flex-col justify-center">
            <span className='text-gray-400 text-lg'>Price</span>
            <span className='text-white text-3xl'>${dataArray[0]?.quote.USD.price.toFixed(8)}</span>
        </div>
      </div>

      <div className='mb-4'>
        <p className='text-white text-start' dangerouslySetInnerHTML={{__html : metadata[0]?.description}}></p>
      </div>

      {/* <History /> */}
      <Chart name={metadata[0]?.symbol} type={type ? type : ""}/>
    </div>
    </div>
  )
}
