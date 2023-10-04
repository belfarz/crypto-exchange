import React, { useState } from "react";
import MsSearch from "../components/MsSearch";
import { FiArrowDownCircle } from "react-icons/fi"
import axios from "axios";
import { getData } from '../components/api'
import { useLoaderData } from 'react-router-dom'
import Coin from '../components/Coin'

export function loader() {

  return getData()
  
}

export default function MoonSheet() {

  const data = useLoaderData()
  const [totalSupply, setTotalSupply] = useState(''); 
  const [secondMarketCap, setSecondMarketCap] = useState("")
  
  function Coin_one(coinId) {
    const url = `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false`

    axios.get(url).then((response)=>{
      setTotalSupply(response.data.market_data.total_supply)
  }).catch((Error)=>{
      console.log(Error)
  })
  // console.log(firstCoin.market_cap.usd)
  }

  function Coin_two(coinId) {
    const url = `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false`

    axios.get(url).then((response)=>{
      setSecondMarketCap(response.data.market_data.market_cap.usd)
  }).catch((Error)=>{
      console.log(Error)
  })
  }

  return (
    <div className=' h-full relative flex-1 lg:ml-64 rounded overflow-y-none overflow-x-auto' id="search_container">
      <h1 className="text-[35px] text-gray-300 mt-8 mb-8" align="center">MoonSheet</h1>
      <h3 className="text-[16px] text-gray-300 mt-8 mb-8" align="center">Calculate the price of A with the market cap of B</h3>

    <div className="flex flex-col md:flex-row lg:flex-row justify-center" >
      <MsSearch coin={Coin_one}/>
      <div className="flex justify-center"><FiArrowDownCircle size={30} className="text-white m-4 ml-10 mr-10" /></div>
      <MsSearch coin={Coin_two}/>
    </div>

    <div className="flex justify-center ">
      <div className="h-[100px] bg-transparrent p-5 m-4">
        <span><img src="" alt="" /></span>
        <h1>{secondMarketCap ? secondMarketCap/totalSupply : ""}</h1>
      </div>
      <strong></strong>
    </div> 

    <div className='relative flex-1 ml-2  overflow-x-auto mt-20' id='outlet'>
    {data ? <Coin  coin={data} list="Promoted Coin"/> : null}
    </div>

    </div>
  )
}
