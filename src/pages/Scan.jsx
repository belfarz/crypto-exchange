import React from 'react'
import { getData } from '../components/api'
import { useLoaderData } from 'react-router-dom'
import Coin from '../components/Coin'
import CoinAds from '../components/CoinAds'

export function loader() {

  return  getData()
           
}

export default function Scan() {
  const data = useLoaderData()
  return (
    <div className='flex flex-col overflow-x-auto'> <CoinAds />
    <div className=' pt-20 h-full relative flex-1 lg:ml-64  overflow-x-auto' id='scan_container'>

      <div className="flex flex-col md:flex-row">
        <div className="flex ">
          <select name="scan" id="scan" className='p-1 rounded-full text-gray-400 focus:outline-none'>
            <option value="bsc">Bsc</option>
            <option value="eth">Eth</option>
            <option value="arbitrum">Arbitrum</option>
            <option value="polygon">Polygon</option>
            <option value="heco">Heco</option>
            <option value="harmonyOn">Harmony</option>
            <option value="cronos">Cronos</option>
          </select>
          <input type="text" id='scan' className='focus:outline-none p-1 rounded-full text-gray-400 ml-5 mr-5 w-full  md:w-96'/>
        </div>
        <div className="flex justify-center">
        <button className='bg-purple-800 px-10 py-2 rounded-full text-[12px] text-white font-bold  mt-4 md:mt-0'>Check</button>
        </div>
      </div>

      <div className='relative flex-1 ml-2  overflow-x-auto mt-20' id='outlet'>
      {data ? <Coin  coin={data} list="Promoted Coin"/> : null}
    </div>
    </div>
    </div>
  )
}
