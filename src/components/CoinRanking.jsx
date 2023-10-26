import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Coin from './Coin';
import ReactPaginate from 'react-paginate';
import { NavLink } from 'react-router-dom';
import CoinAds from './CoinAds';
import PromotedCoin from './PromotedCoin';




export default function CoinRanking() {

    const first = "bitcoin%2Cethereum%2Cbinancecoin%2Cripple%2Cusd-coin%2Cstaked-ether%2Csolana%2Ccardano%2Cdogecoin%2C"
    const [metadata, setMetadata] = useState({})
    const [idsString, setIdsString] = useState('');
    const [promString, setPromString] = useState("");
    const [verifyPromoted, setVerifyPromoted] = useState([])
    const payedUrl = promString && `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?slug=${promString}`
    const promUrl = idsString ? `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${first+idsString}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en` : null;
    const [coinData, setCoinData] = useState([]);
  
    

    useEffect(()=>{
          axios.get("https://kojocalls.onrender.com/api/payedpromotion").then((response)=>{
            const idCollect = response.data.map(item => item.coinId).join(',');
            setPromString(idCollect)
          }).catch((Error)=>{
            console.log(Error)
          })  

     
        axios.get("https://kojocalls.onrender.com/api/promoted").then((response)=>{
          
          const idString = response.data.map(item => item.coinId).join('%2C');
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
            coinIds: promString, // Array of coin slugs
          });
    
          setCoinData(response.data.data);
          console.log(response)
        } catch (error) {
          console.error(error);
        }

        try {
          const response = await axios.post('https://kojocalls.onrender.com/api/metadata', {
            coinIds: promString, // Array of coin slugs
          });
    
          setMetadata(response.data.data);
          console.log(response)
        } catch (error) {
          console.error(error);
        }
      };
      
        fetchCoinData();
        
    


      axios.get(promUrl).then((response)=>{
        setVerifyPromoted(response.data)
        console.log("verify promo"+response.data)
        
    }).catch((Error)=>{
        console.log(Error)
    })

    },[idsString,promUrl,payedUrl,promString])

    //----------------------------------------------------//
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = verifyPromoted.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(verifyPromoted.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % verifyPromoted.length;
    setItemOffset(newOffset);
  };
    //----------------------------------------------------//
 
   
  return (
    <div className='flex-col overflow-x-auto w-full '>

    <CoinAds />      

    <div className='relative flex-1 ml-2 lg:ml-64  overflow-x-auto pt-4 mb-8 mt-4' id='outlet'>
      <PromotedCoin  coin={coinData} list="Promoted Coin" meta={metadata} idList={promString.split(',')} />
      {/* <Coin  coin={payedPromotion} list="Promoted Coin" /> */}
    </div>

    <div className='lg:ml-64 text-gray-400'>
      <div className=''>
        <NavLink className=' px-3 pt-2 text-sm font-bold' >New Listing</NavLink>
      </div>
     
    </div>

    <div className='relative flex-1 ml-2 mr-2 lg:ml-64 mt-6 rounded overflow-x-auto' id='outlet'>
      <Coin  coin={currentItems} list="Coin"/>
    </div>

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

    
  </div>
  )
}



