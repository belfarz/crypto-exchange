import React, { useState,useEffect } from "react";
import MsSearch from "../components/MsSearch";
import { FiArrowDownCircle } from "react-icons/fi"
import axios from "axios";
import PromotedCoin from "../components/PromotedCoin";
import CoinAds from "../components/CoinAds";



export default function MoonSheet() {

 
  const [totalSupply, setTotalSupply] = useState(''); 
  const [secondMarketCap, setSecondMarketCap] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const [Data, setData] = useState([])
  const [metaData, setMetaData] = useState([])

  useEffect(()=>{
    async function getData() {
      try {
          const responsePromoted = await axios.get("https://kojocalls.onrender.com/api/payedpromotion");
          const idsString = responsePromoted.data.map(item => item.cmc_id).join(',');
  
          console.log("Promoted IDs:", idsString);    
  
          const coindata = await axios.post('https://kojocalls.onrender.com/api/coinmarketcap', {
            coinIds: idsString, // Array of coin slugs
          });

          const metadata = await axios.post('https://kojocalls.onrender.com/api/metadata', {
            coinIds: idsString, // Array of coin slugs
          });
          setData(coindata.data.data)
          setMetaData(metadata.data.data)
      } catch (error) {
          console.error(error);
      }
  }
  getData()  
  },[])

  
  function Coin_one(coinId) {
    const url = `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false`

    axios.get(url).then((response)=>{
      setTotalSupply(response.data.market_data.total_supply)
      setPrice(response.data.market_data.current_price.usd)
      setImage(response.data.image.thumb)
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

  const answer = secondMarketCap ? secondMarketCap/totalSupply : null
  const percentage = answer / price

  return (
    <div className='flex flex-col overflow-x-auto'> <CoinAds />
    <div className=' h-full relative flex-1 lg:ml-64 rounded overflow-y-none overflow-x-auto' id="search_container">

      <h1 className="text-[35px] text-gray-300 mt-8 mb-8" align="center">KojoSheet</h1>
      <h3 className="text-[16px] text-gray-300 mt-8 mb-8" align="center">Calculate the price of A with the market cap of B</h3>

    <div className="flex flex-col md:flex-row lg:flex-row justify-center" >
      <MsSearch coin={Coin_one}/>
      <div className="flex justify-center"><FiArrowDownCircle size={30} className="text-white m-4 ml-10 mr-10" /></div>
      <MsSearch coin={Coin_two}/>
    </div>

    
    {
      secondMarketCap ? (
        <div className="flex justify-center ">
      <div className="h-[100px] flex justify-center items-center bg-gradient-to-bl from-purple-800 to-black p-5 m-4 rounded-xl">
        <span><img src={image} alt="" size={80} className="m-2"/></span>
        <h1 className="font-bold text-4xl text-white">${answer.toLocaleString()}</h1>
        {percentage > 0 ? (
         <span className="text-green-500 text-4xl m-2">({percentage.toLocaleString()}x)</span>
        ):<span className="text-red-500 text-4xl m-2">({percentage.toLocaleString()}x)</span>}
      </div>
      <strong></strong>
    </div>
      ) : null
    } 

    <div className='relative flex-1 ml-2  overflow-x-auto mt-2' id='outlet'>
    {Data ? <PromotedCoin  coin={Data} list="Promoted Coin" meta={metaData} /> : null}
    </div>

    </div>
    </div>
  )
}
