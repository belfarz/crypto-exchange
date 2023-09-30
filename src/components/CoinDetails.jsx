import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Chart from "./Chart"

export function loader({params}) {
    
    return params.id
}

export default function CoinDetails() {
    const coinData = useLoaderData()
  return (
    <div className='flex justify-center lg:ml-64 mt-[100px] '> 
      <Chart />
    </div>
  )
}
