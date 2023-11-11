import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Coin from './Coin';
import ReactPaginate from 'react-paginate';
import { NavLink } from 'react-router-dom';
import CoinAds from './CoinAds';
import PromotedCoin from './PromotedCoin';




export default function CoinRanking() {
  
    const [table, setTable] = useState(false)
    const [metadata, setMetadata] = useState({})
    const [idsString, setIdsString] = useState('');
    const [promString, setPromString] = useState("");
    const [latest, setLatest] = useState([])
    const [verifyMeta, setVerifyMeta] = useState([])
    const [verifyPromoted, setVerifyPromoted] = useState([])
    const promUrl = table ? (idsString ? `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${idsString}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en` : null) : ("https://kojocalls.onrender.com/api/latest");
    const [coinData, setCoinData] = useState([]);
    
  
    

    useEffect(()=>{
          axios.get("https://kojocalls.onrender.com/api/payedpromotion").then((response)=>{
            const idCollect = response.data.map(item => item.cmc_id).join(',');
            setPromString(idCollect)
          }).catch((Error)=>{
            console.log(Error)
          })  

     
        axios.get("https://kojocalls.onrender.com/api/promoted").then((response)=>{
          console.log(response.data.map(item => item.cmc_id).join(','))
          const idString = response.data.map(item => item.cmc_id).join(',');
          setIdsString(idString)
        }).catch((Error)=>{
          console.log(Error)
        })

        
    },  [])

    useEffect(()=>{
      // console.log(promString)

      const fetchCoinData = async () => {
        try {
          const response = await axios.post('https://kojocalls.onrender.com/api/coinmarketcap', {
            coinIds: promString, // string of coin slugs
          });
          const response2 = await axios.post('https://kojocalls.onrender.com/api/coinmarketcap', {
            coinIds: idsString, // string of coin slugs
          });
    
          setCoinData(response.data.data);
          setVerifyPromoted(response2.data.data)
          console.log(response)
        } catch (error) {
          console.error(error);
        }

        try {
          const response = await axios.post('https://kojocalls.onrender.com/api/metadata', {
            coinIds: promString, // string of coin slugs
          });
          const response2 = await axios.post('https://kojocalls.onrender.com/api/metadata', {
            coinIds: idsString, // string of coin slugs
          });
    
          setMetadata(response.data.data);
          setVerifyMeta(response2.data.data);
          console.log(response)
        } catch (error) {
          console.error(error);
        }
      };
      
        fetchCoinData();
        
    


      axios.get("https://kojocalls.onrender.com/api/latest").then((response)=>{
        setLatest(response.data)
        const idlatest = response.data.map(item => item.id).join(',');
        console.log(idlatest)
    }).catch((Error)=>{
        console.log(Error)
    })

    },[idsString,promUrl,promString])

    //----------------------------------------------------//
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = latest.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(latest.length / itemsPerPage);
  console.log(latest)

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % latest.length;
    setItemOffset(newOffset);
  };
    //----------------------------------------------------//
 
   
  return (
    <div className='flex-col overflow-x-auto w-full '>

    <CoinAds />      

    <div className='relative flex-1 ml-2 lg:ml-64  overflow-x-auto pt-4 mb-8 mt-4' id='outlet'>
      <PromotedCoin  coin={coinData} list="Promoted Coin" meta={metadata} />
      {/* <Coin  coin={payedPromotion} list="Promoted Coin" /> */}
    </div>

    <div className='lg:ml-64 text-gray-400'>
      <div className=''>
        <NavLink className=' px-3 py-2 text-sm font-bold' id='trait' onClick={()=>setTable(false)}>Trending</NavLink>
        <NavLink className=' px-3 py-2 text-sm font-bold' onClick={()=>setTable(true)}>New Listing</NavLink>
      </div>
     
    </div>

    <div className='relative flex-1 ml-2 mr-2 lg:ml-64 mt-6 rounded overflow-x-auto' id='outlet'>
      {table ? (<PromotedCoin  coin={verifyPromoted} list="Promoted Coin" meta={verifyMeta} table={table}/>) : (<Coin  coin={currentItems} list="Coin" table={table}/>)}
    </div>

    {
      table ? null : (
        <div className="mx-auto w-full my-4">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName='flex justify-center relative '
        pageLinkClassName='page-num p-1 pl-3 pr-3 m-1 rounded-md hover:pl-3 hover:pr-3 hover:pt-1 hover:pb-1'
        previousLinkClassName='page-num p-1 pl-3 pr-3 m-1 rounded-md hover:pl-3 hover:pr-3 hover:pt-1 hover:pb-1'
        nextLinkClassName='page-num p-1 pl-3 pr-3 m-1 rounded-md hover:pl-3 hover:pr-3 hover:pt-1 hover:pb-1'
        activeLinkClassName='page-active'
     />
    </div>
      )
    }

    
  </div>
  )
}



