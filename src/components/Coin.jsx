import  React from 'react'
import { CiStar } from "react-icons/ci";
import { PiArrowsDownUpBold } from 'react-icons/pi';
import testImg from "../image/test.png"
// import { Link} from 'react-router-dom';
import Links from './Link';
// import { links } from './api';
// import { useState } from 'react';

export default function Coin(props) {

  const links = [
    {
      tg: 'https://t.me/BearAIofficial',
      x: null,
      site: 'http://Bearai.org'
    },
    {
      tg: 'https://t.me/blobofficial',
      x: 'https://twitter.com/BLOBProtocol',
      site: null
    },
    {
      tg: 'https://t.me/DarkForestERCChat',
      x: "https://twitter.com/darkforesterc",
      site: 'null'
    },
    {
      tg: 'https://t.me/RavenFundPortal',
      x: null,
      site: null
    },
    {
      tg: null,
      x: null,
      site: 'tokendefi-rectification.com'
    },
    {
      tg: 'https://t.me/tradexai',
      x: null,
      site: 't.me'
    }
    
  ]

  // const [width, setWidth] = useState(50);
  // const maxWidth = 100; // Set your maximum width here
  // const [link, setLink] = useState(null)

  const { coin, list } = props;

  const TruncatedText = ({ text, maxLength }) => {
    const truncatedText = text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  
    return (
      <span className="truncate">
        {truncatedText}
      </span>
    );
  };

  

  return (
    <div>
        <table className="w-full " id='table'>
      <thead>
       
        <tr>
        {/* <Link> </Link> */}
        <th className="px-6 py-4  text-left text-xs leading-4 font-medium text-white-500 uppercase tracking-wider ">
            #
          </th>
          <th className=" py-4  text-right text-xs leading-4 font-medium text-white-500 uppercase tracking-wider sticky left-0 " id='coin-1-row'>
            <div className="flex justify-center text-18">
            {list}
            {<PiArrowsDownUpBold style={{ fontSize: '14px' }}/>}
            </div>
          </th>
          <th className="  text-xs leading-4 font-medium text-white-500 uppercase tracking-wider min-w-[80px] ">
            <div className="flex justify-center text-18 pr-2">
            1H
            {<PiArrowsDownUpBold style={{ fontSize: '14px' }}/>}
            </div>
          </th>
          <th className="  text-xs leading-4 font-medium text-white-500 uppercase tracking-wider min-w-[80px] ">
           <div className="flex  justify-center text-18"> 24H
            {<PiArrowsDownUpBold style={{ fontSize: '14px' }}/>}</div>
          </th>
          <th className="  text-xs leading-4 font-medium text-white-500 uppercase tracking-wider min-w-[80px] ">
            <div className="flex justify-center text-18 pr-2">
            7d
            {<PiArrowsDownUpBold style={{ fontSize: '14px' }}/>}
            </div>
          </th>
          <th className=" py-4  text-right text-xs leading-4 font-medium text-white-500 uppercase tracking-wider min-w-[100px] ">
            <div className="flex text-18 justify-center pl-3 ">
            Price
            {<PiArrowsDownUpBold style={{ fontSize: '14px' }}/>}
            </div>
          </th>
          <th className=" py-4  text-right text-xs leading-4 font-medium text-white-500 uppercase tracking-wider min-w-[180px] ">
            <div className="flex text-18 justify-center">
            Market Cap
            {<PiArrowsDownUpBold style={{ fontSize: '14px' }}/>}
            </div>
          </th>
         
          {list === "Promoted Coin" ? (
            <th className=" py-4  text-18 text-left text-xs leading-4 font-medium text-white-500 uppercase tracking-wider ">
            <div className="flex text-18  justify-center">Links</div>
          </th>
          ): null}

          <th className=" py-4  text-18 text-left text-xs leading-4 font-medium text-white-500 uppercase tracking-wider min-w-[100px]">
            <div className="flex text-18  justify-end">Votes</div>
          </th>
        </tr>
        
      </thead>
      <tbody className=" ">
        {coin.map((crypto,index) => {
        

          return(
            
          <tr key={crypto?.market_cap_rank ? crypto.market_cap_rank : "-"} className=''>
          {/* <Link to={`coin/${crypto.id}`} className='flex'></Link> */}
            <td className="px-2 pt-2 whitespace-no-wrap text-white-500">
              {<CiStar style={{ fontSize: '24px' }} />}
            </td>
            <td className=" py-4 lg:px-6 min-w-[150px] whitespace-no-wrap text-white-500 flex sticky left-0 lg:max-w-[250px]"  id='coin-1-row'>
            {/* <Link to={`coin/${crypto.id}`} className='flex whitespace-no-wrap sticky left-0  lg:max-w-[250px]'> */}
            <img
              src={crypto && crypto.image ? crypto.image : testImg}
              alt=""
              className="coin_image p-2"
            />
              <div className='flex flex-col'>
                <p>{crypto?.symbol ? crypto.symbol : null }</p>
                <p><TruncatedText text={crypto?.name ? crypto.name : null} maxLength={8} /></p> 
              </div>
              {/* </Link>  */}
            </td>
            {crypto && crypto.price_change_percentage_1h_in_currency ?
            crypto.price_change_percentage_1h_in_currency > 0 ? 
                  <td className="px-4 pt-8  whitespace-no-wrap text-green-500 text-right min-w-[80px]">
                  {crypto.price_change_percentage_1h_in_currency.toFixed(2)}
                  </td> : 
                  <td className="px-4 pt-8  whitespace-no-wrap text-red-500 text-right min-w-[80px]">
                  {crypto.price_change_percentage_1h_in_currency.toFixed(2)}
                  </td> : <td className="px-4 pt-8  whitespace-no-wrap text-right min-w-[80px]">-</td>
            }
            {crypto && crypto.price_change_percentage_24h_in_currency ?
            crypto.price_change_percentage_24h_in_currency > 0 ? 
                  <td className="px-4 pt-8 whitespace-no-wrap text-green-500 text-right min-w-[80px]">
                  {crypto.price_change_percentage_24h_in_currency.toFixed(2)}
                  </td> : 
                  <td className="px-4 pt-8 whitespace-no-wrap text-red-500 text-right min-w-[80px]">
                  {crypto.price_change_percentage_24h_in_currency.toFixed(2)}
                  </td> : <td className="px-4 pt-8 whitespace-no-wrap  text-right min-w-[80px]">-</td>
            }
            {crypto && crypto.price_change_percentage_7d_in_currency ?
            crypto.price_change_percentage_7d_in_currency > 0 ? 
                  <td className="px-4 pt-8 whitespace-no-wrap text-green-500 text-right min-w-[80px]">
                  {crypto.price_change_percentage_7d_in_currency.toFixed(2)}
                  </td> : 
                  <td className="px-4 pt-8 whitespace-no-wrap text-red-500 text-right min-w-[80px]">
                  {crypto.price_change_percentage_7d_in_currency.toFixed(2)}
                  </td> : <td className="px-4 pt-8 whitespace-no-wrap text-right min-w-[80px]">-</td>
            }
            <td className="pt-8 whitespace-no-wrap text-white-500  text-right min-w-[100px]" >
              ${crypto?.current_price ? crypto.current_price.toLocaleString() : ""}
            </td>
            <td className=" pt-8 whitespace-no-wrap text-white-500 text-right  min-w-[180px]">
              <div className="flex justify-center">${crypto?.market_cap ? crypto.market_cap.toLocaleString() : null}</div>
            </td>
            
            {
              list === "Promoted Coin" ? (
                <td className=" pt-8 whitespace-no-wrap text-white-500 text-right  ">
            <div className="flex justify-end flex-col">
            <Links getLinks={links[index]} />
            </div>
            </td>
              ) : null
            }
            
            <td className="pr-6  mt-6 whitespace-no-wrap text-white-500 text-right min-w-[100px]">
              {/* <div className="bg-orange-500 rounded-full w-[100px] h-[40px]" 
                onClick={() => vote()}
              >
                <div className={`bg-white rounded-l-full w-[${width}px] h-[40px]`} ></div>
              </div> */}
             
            </td>
            
          </tr>
         
          )
              })}
      </tbody>
    </table>
    </div>
  )
}
