import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Chart from "./Chart"
import { getCoin } from './api'

export function loader({params}) {
    console.log(params.id)
    return getCoin(params.id)
}

export default function CoinDetails() {
    const coinData = useLoaderData()
    console.log(coinData)
  return (
    <div className='flex flex-col  lg:ml-64 mt-[100px] '> 

      <div className="flex">
        <div className="flex mr-10">
            <div className=''><img src={coinData.image.large} alt="" width={100} height={100}/></div>
            <div className="flex flex-col justify-center m-5">
                <span className='text-white text-3xl'>{coinData.name}</span>
                <span className='text-white text-lg'>{coinData.symbol}</span>
            </div>
        </div>
        <div className="flex flex-col justify-center">
            <span className='text-gray-400 text-lg'>Price</span>
            <span className='text-white text-3xl'>${coinData.market_data.current_price.usd}</span>
        </div>
      </div>

      <Chart />
    </div>
  )
}
