import React, { useState } from "react";
import MsSearch from "../components/MsSearch";
import { FiArrowDownCircle } from "react-icons/fi"
import axios from "axios";



export default function MoonSheet() {

  const [firstCoin, setFirstCoin] = useState(''); 
  const [secondCoin, setSecondCoin] = useState("")
  const [nameOne, setNameOne] = useState("")
  
  function Coin_one(coinId,coinName) {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd&include_market_cap=true`

    axios.get(url).then((response)=>{
      setFirstCoin(response.data)
      setNameOne(coinName)
      
  }).catch((Error)=>{
      console.log(Error)
  })
  console.log(firstCoin)
  }

  function Coin_two(data) {
    setSecondCoin(data)
    console.log("second passed function is working")
  }

  return (
    <div className='mt-24 h-full relative flex-1 ml-2 lg:ml-64  overflow-x-auto' id="search_container">
      <h1 className="text-[35px] text-gray-300 mt-8 mb-8" align="center">MoonSheet</h1>
      <h3 className="text-[16px] text-gray-300 mt-8 mb-8" align="center">Calculate the price of A with the market cap of B</h3>

    <div className="flex flex-col md:flex-row lg:flex-row justify-center" >
      <MsSearch coin={Coin_one}/>
      <div className="flex justify-center"><FiArrowDownCircle size={30} className="text-white m-4 ml-10 mr-10" /></div>
      <MsSearch coin={Coin_two}/>
    </div>

    <div className="flex justify-center ">
      <div className="h-[100px] bg-white p-5 m-4">
        <span><img src="" alt="" /></span>
        <h1>{firstCoin[nameOne]}</h1>
        <h1>{secondCoin}</h1>
      </div>
      <strong></strong>
    </div> 

    </div>
  )
}
