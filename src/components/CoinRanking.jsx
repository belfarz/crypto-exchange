import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Coin from './Coin';
import ReactPaginate from 'react-paginate';
import { NavLink } from 'react-router-dom';
import eth from "../image/eth1.jpg"
import bnb from "../image/bnb.jpg"
import base from "../image/eth.jpg"
import sol from "../image/sol.jpg"
import cro from "../image/cro.jpg"
import doge from "../image/doge.jpg"
import CoinAds from './CoinAds';




export default function CoinRanking() {


    const [payedPromotion, setPayedPromotion] = useState([])
    const [idsString, setIdsString] = useState('');
    const [promString, setPromString] = useState([])
    const [verifyPromoted, setVerifyPromoted] = useState([])
    const payedUrl = promString ? `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${promString}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en` : null;
    const promUrl = idsString ? `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en` : null;

    useEffect(()=>{
          axios.get("https://kojocalls.onrender.com/api/payedpromotion").then((response)=>{
                
            console.log(response.data)
            const String = response.data.map(item => item.coinId).join('%2C');
            setPromString(String)
            console.log("Promoted IDs:", String);
            console.log(response.data)
          }).catch((Error)=>{
            console.log(Error)
          })  

        axios.get("https://kojocalls.onrender.com/api/promoted").then((response)=>{
          
          console.log(response.data)
          const String = response.data.map(item => item.coinId).join('%2C');
          setIdsString(String)
           console.log("Promoted IDs:", String);
          console.log(response.data)
        }).catch((Error)=>{
          console.log(Error)
        })

        
    },[])

    useEffect(()=>{

      payedUrl && axios.get(payedUrl).then((response)=>{
        setPayedPromotion(response.data)
        console.log("verify promo"+response.data)
        
    }).catch((Error)=>{
        console.log(Error)
    })

      axios.get(promUrl).then((response)=>{
        setVerifyPromoted(response.data)
        console.log("verify promo"+response.data)
        
    }).catch((Error)=>{
        console.log(Error)
    })

    },[idsString,promUrl,payedUrl])

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

    <div className='relative flex-1 ml-2 lg:ml-64  overflow-x-auto pt-4 mb-20 mt-4' id='outlet'>
      <Coin  coin={payedPromotion} list="Promoted Coin" />
    </div>

    <div className='lg:ml-64 text-gray-400'>
      <div className='overflow-x-auto min-w-[500px] pt-6'>
        <NavLink className=' px-3 pb-3 pt-2' id='trait'>New Listing</NavLink>
        <NavLink className=' px-3 pb-3 pt-2' id='trait'>New Launches</NavLink>
        <NavLink className=' px-3 pb-3 pt-2' >New Trending</NavLink>
      </div>
      <div className='my-5 flex overflow-x-auto'>
        <div className=' px-2 py-1 rounded-full mr-2 flex min-w-[75px]' id='trait-button'><img src={eth} alt="" width={19} className='py-1 pr-1 whitespace-no-wrap'/>ETH</div> 
        <div className=' px-2 py-1 rounded-full mr-2 flex min-w-[75px]' id='trait-button'><img src={bnb} alt="" width={19} className='py-1 pr-1 whitespace-no-wrapwhitespace-no-wrap'/>BSC</div> 
        <div className=' px-2 py-1 rounded-full mr-2 flex min-w-[75px]' id='trait-button'><img src={base} alt="" width={19} className='py-1 pr-1 whitespace-no-wrapwhitespace-no-wrap'/>BASE</div> 
        <div className=' px-2 py-1 rounded-full mr-2 flex min-w-[75px]' id='trait-button'><img src={sol} alt="" width={19} className='py-1 pr-1 whitespace-no-wrapwhitespace-no-wrap'/>SOL</div> 
        <div className=' px-2 py-1 rounded-full mr-2 flex min-w-[75px]' id='trait-button'><img src={cro} alt="" width={19} className='py-1 pr-1 whitespace-no-wrapwhitespace-no-wrap'/>CRO</div> 
        <div className=' px-2 py-1 rounded-full mr-2 flex min-w-[75px]' id='trait-button'><img src={doge} alt="" width={19} className='py-1 pr-1 whitespace-no-wrapwhitespace-no-wrap'/>DOGE</div>
      </div>
    </div>

    <div className='relative flex ml-2 mr-2 lg:ml-64 mt-10 rounded overflow-x-auto' id='outlet'>
      <Coin  coin={currentItems} list="Coin"/>
    </div>

    <div className="mx-auto w-full ">
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



