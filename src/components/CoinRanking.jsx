import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Coin from './Coin';

export default function CoinRanking() {

    const [coin, setCoin] = useState([])
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C7d%2C24h&locale=en"

    useEffect(()=>{
        axios.get(url).then((response)=>{
            setCoin(response.data)
            console.log(response.data[0])
        }).catch((Error)=>{
            console.log(Error)
        })
    },[])

    // const data = [
    //   { id: 1, name: 'Bitcoin', symbol: 'BTC', price: 45000 },
    //   { id: 2, name: 'Ethereum', symbol: 'ETH', price: 3200 },
    //   // ... more data
    // ];

  return (
    <div className='text '>
    <Coin  coin={coin} />
    </div>
  )
}



