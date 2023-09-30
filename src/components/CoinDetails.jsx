import React from 'react'
// import { useLoaderData } from 'react-router-dom'
import Chart from "./Chart"
import axios from 'axios'

export function loader({params}) {
    const url = `https://api.coingecko.com/api/v3/coins/${params.id}?localization=false`

    axios.get(url).then((response)=>{
        return response.data
        
    }).catch((Error)=>{
        console.log(Error)
    })
    return null
}

export default function CoinDetails() {
    // const coinData = useLoaderData()
  return (
    <div className='flex justify-center lg:ml-64 mt-[100px] '> 
      <Chart />
    </div>
  )
}
