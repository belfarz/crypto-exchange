import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useParams } from 'react-router-dom'
import Chart from "./Chart"
// import History from './History'
import CoinAds from './CoinAds'
import Copy from './Copy'
import Links from './Link'



export default function CoinDetails() {

  const params = useParams()
  const location = useLocation()
  const type = location?.state?.type || ''; 
  const cmc_id = location?.state?.cmc_id || ''; 
 

  const [data, setData] = useState({})
  const [meta, setMeta] = useState({})
  const [chartDetails, setChartDetails] = useState({})

  useEffect(()=>{
    const fetchData = async () =>{
      // const param = params.id === "binancecoin" ? "bnb" : params.id
      try {
        const response = await axios.post('https://kojocalls.onrender.com/api/coinmarketcap', {
          coinIds: cmc_id, // Array of coin slugs
        });
        const metadata = await axios.post('https://kojocalls.onrender.com/api/metadata', {
            coinIds: cmc_id, // Array of coin slugs
          }); 

        const chartdetails = await axios.get(`https://kojocalls.onrender.com/api/coindetails/${cmc_id}`)
  
        setData(response.data.data);
        setMeta(metadata.data.data);
        setChartDetails(chartdetails)
        console.log(chartdetails)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  },[cmc_id,params.id])

  const TruncatedText = ({ text, maxLength }) => {
    const truncatedText = text?.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  
    return (
      <span className="truncate">
        {truncatedText}
      </span>
    );
  };
 
  const dataArray = data && Object.values(data)
  const metadata = meta && Object.values(meta)

  const truncatedAddress = metadata[0] ? <TruncatedText text={metadata[0]?.contract_address[0]?.contract_address || null } maxLength={14} /> : null;
  return (
    <div className='flex-col overflow-x-auto w-full '>
       <CoinAds />
    <div className='flex flex-col justify-start items-start lg:ml-64 mt-[20px]  p-2' id='coindetails'> 
      <div className="md:flex sm:flex-col lg:flex-row">
        <div className="flex mr-10">
            <div className=''><img src={metadata[0]?.logo} alt="" width={100} height={100}/></div>
            <div className="flex flex-col justify-center m-5 mb-6">
                <span className='text-white text-3xl'>{metadata[0]?.name}</span>
                <span className='text-white text-lg'>{metadata[0]?.symbol}</span>
            </div>
        </div>
        <div className="flex flex-col justify-center mr-5">
            <span className='text-gray-400 text-lg'>Price</span>
            <span className='text-white text-3xl'>${dataArray[0]?.quote.USD.price.toFixed(2)}</span>
        </div>
        <div className="flex">
        <div className="flex flex-col justify-center">
            <span className='text-gray-400 text-lg'>Address</span>
            <span className='text-white text-2xl flex '>{truncatedAddress} <span>{ metadata[0]?.contract_address[0]?.contract_address ? <Copy text={metadata[0]?.contract_address[0]?.contract_address || null} /> : null }</span> </span>
        </div>
        <div className="pt-6 flex justify-center items-center text-white">
        {metadata[0]?.urls ? <Links getLinks={metadata ? metadata[0]?.urls : null} details={true}/> : null}
        </div>
        </div>
      </div>

      <div className='my-4'>
        <p className='text-white text-start' dangerouslySetInnerHTML={{__html : metadata[0]?.description}}></p>
      </div>

      {/* <History /> */}
      {/* {type ? <Chart name={metadata[0]?.symbol} type={type ? type : ""}/> : null} */}
      {
        chartDetails.data ? (type !== "normal" ? <Chart name={metadata[0]?.symbol} /> : 
        <div className=' w-full lg:w-2/3'>
      <iframe title='coin chart' width="100%" height="720" frameBorder="0" scrolling="no" src={`https://coinbrain.com/embed/${chartDetails?.data?.chain}-${chartDetails?.data?.address}?theme=dark&padding=16&chart=1&trades=1&ratio=0.68`}></iframe>
      </div>
        ) : null
      }
      
    </div>
    </div>
  )
}
