import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Coin from './Coin';
import ReactPaginate from 'react-paginate';

export default function CoinRanking() {

    const [coin, setCoin] = useState([])
    const [idsString, setIdsString] = useState('');
   // const [promoted, setPromoted] = useState([])
    const [verifyPromoted, setVerifyPromoted] = useState([])
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C7d%2C24h&locale=en"
    const promUrl = idsString ? `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${idsString}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en` : null;

    useEffect(()=>{
        axios.get(url).then((response)=>{
            setCoin(response.data)
            console.log(response.data[0])
            
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
      axios.get(promUrl).then((response)=>{
        setVerifyPromoted(response.data)
        console.log("verify promo"+response.data)
        
    }).catch((Error)=>{
        console.log(Error)
    })
    },[idsString])

    //----------------------------------------------------//
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = coin.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(coin.length / itemsPerPage);
  

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % coin.length;
    setItemOffset(newOffset);
  };
    //----------------------------------------------------//
 
   
  return (
    <div className='flex-col overflow-x-auto w-full'>

    <div className='relative flex-1 ml-2 lg:ml-64  overflow-x-auto mb-10' id='outlet'>
      <Coin  coin={verifyPromoted} list="Promoted"/>
    </div>

    <div className='relative flex-1 ml-2 lg:ml-64  overflow-x-auto' id='outlet'>
      <Coin  coin={currentItems} list="Coin"/>
    </div>

    <div className="mx-auto w-full">
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



