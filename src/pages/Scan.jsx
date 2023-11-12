import React,{useEffect, useState} from 'react'
import CoinAds from '../components/CoinAds'
import axios from 'axios'
import PromotedCoin from '../components/PromotedCoin'

export default function Scan() {
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

  return (
    <div className='flex flex-col overflow-x-auto'> <CoinAds />
    <div className=' pt-6 h-full relative flex-1 lg:ml-64  overflow-x-auto' id='scan_container'>

      <div className="flex flex-col md:flex-row">
        <div className="flex ">
          <select name="scan" id="scan" className='p-1 ml-2 rounded-full text-gray-400 focus:outline-none'>
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

      <div className='relative flex-1 ml-2  overflow-x-auto mt-6' id='outlet'>
      {Data ? <PromotedCoin  coin={Data} list="Promoted Coin" meta={metaData} /> : null}
    </div>
    </div>
    </div>
  )
}
