import  React,{useState, useEffect} from 'react'
import { CiStar } from "react-icons/ci";
import { PiArrowsDownUpBold } from 'react-icons/pi';
import { Link} from 'react-router-dom';
import Links from './Link';
// import { links } from './api';
// import { useState } from 'react';

export default function PromotedCoin(props) {

    const { coin, list, meta } = props;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener when component mounts
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);




  const dataArray = coin && Object.values(coin);
  const metadata = meta && Object.values(meta);
  console.log(metadata)

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
        <table className=" lg:w-full" id='table'>
      <thead>
       
        <tr>
        {/* <Link> </Link> */}
        <th className="px-6 py-4  text-left text-xs leading-4 font-bold text-white-500 uppercase tracking-wider ">
            #
          </th>
          <th className=" py-4  text-right text-xs  leading-4 font-bold text-white-500 uppercase tracking-wider sticky left-0 min-w-[150px] lg:min-w-[250px]" id='coin-1-row'>
            <div className="flex text-18 ">
            {list}
            {<PiArrowsDownUpBold style={{ fontSize: '14px' }}/>}
            </div>
          </th>
          <th className="  text-xs leading-4 font-bold text-white-500 uppercase tracking-wider min-w-[80px] ">
            <div className="flex justify-center text-18 ">
            1H
            {<PiArrowsDownUpBold style={{ fontSize: '14px' }}/>}
            </div>
          </th>
          <th className="  text-xs leading-4 font-bold text-white-500 uppercase tracking-wider min-w-[80px] ">
           <div className="flex  justify-center text-18"> 24H
            {<PiArrowsDownUpBold style={{ fontSize: '14px' }}/>}</div>
          </th>
          <th className="  text-xs leading-4 font-bold text-white-500  uppercase tracking-wider min-w-[80px] ">
            <div className="flex justify-center text-18 ">
            7d
            {<PiArrowsDownUpBold style={{ fontSize: '14px' }}/>}
            </div>
          </th>
          <th className=" py-4  text-right text-xs leading-4 lg:mx-60 font-bold text-white-500 uppercase tracking-wider min-w-[100px] ">
            <div className="flex text-18 justify-end pl-3 ">
            Price
            {<PiArrowsDownUpBold style={{ fontSize: '14px' }}/>}
            </div>
          </th>
          <th className=" py-4  text-right text-xs leading-4 font-bold text-white-500 uppercase tracking-wider min-w-[150px] ">
            <div className="flex text-18 justify-center">
            Market Cap
            {<PiArrowsDownUpBold style={{ fontSize: '14px' }}/>}
            </div>
          </th>

          <th className=" py-4  text-18 text-min-w-[100px] left  text-xs leading-4 font-bold text-white-500 uppercase tracking-wider ">
            <div className="flex text-18  justify-center">Launch Date</div>
          </th>
         
          <th className=" py-4  text-18 text-left text-xs leading-4 font-bold text-white-500 uppercase tracking-wider ">
            <div className="flex text-18  justify-center">Links</div>
          </th>
         
          <th className=" py-4  text-18 text-left text-xs leading-4 font-bold text-white-500 uppercase tracking-wider min-w-[100px]">
            <div className="flex text-18  justify-end">Address</div>
          </th>
          <th className=" py-4  text-18 text-left text-xs leading-4 font-bold text-white-500 uppercase tracking-wider min-w-[100px]">
            <div className="flex text-18  justify-end">Votes</div>
          </th>
        </tr>
        
      </thead>
      <tbody className="">
        {dataArray.map((crypto,index) => {

          // i want to make an api call for every member of this map function and adding data from the api to this table body
        
        const truncatedName = crypto?.name ? <TruncatedText text={crypto.name} maxLength={8} /> : null;
        const fullName = crypto?.name ? crypto.name : null;
        const currentmeta = metadata[index]
        const truncatedAddress = currentmeta ? <TruncatedText text={currentmeta.contract_address[0].contract_address} maxLength={6} /> : null;
        const launchDate = currentmeta ? currentmeta.date_launched : null
          return(
            
          <tr key={crypto?.market_cap_rank ? crypto.market_cap_rank : "-"} className=''>
          {/* <Link to={`coin/${crypto.id}`} className='flex'></Link> */}
            <td className="pr-2 pt-2 whitespace-no-wrap  w-[30px]">
              {<CiStar style={{ fontSize: '24px' }} />}
            </td>
            <td className=" my-4  min-w-[150px]   whitespace-no-wrap text-white-500 flex sticky left-0 lg:max-w-[250px]"  id='coin-1-row'>
            <Link to={`coin/${crypto.id}`} className='flex whitespace-no-wrap sticky left-0  lg:max-w-[250px]'>
            <img
              src={currentmeta ? currentmeta.logo : ""}
              alt=""
              className="coin_image p-2"
            />
              <div className='flex flex-col'>
                <p>{crypto?.symbol ? crypto.symbol : null }</p>
                <p>{windowWidth <= 768 ? truncatedName : fullName}</p> 
              </div>
              </Link> 
            </td>
            {crypto && crypto.quote.USD.percent_change_1h ?
            crypto.quote.USD.percent_change_1h > 0 ? 
                  <td className="px-4 pt-4  whitespace-no-wrap text-green-500 text-right min-w-[80px]">
                  <div className="flex justify-center">{crypto.quote.USD.percent_change_1h.toFixed(2)}</div>
                  </td> : 
                  <td className="px-4 pt-4  whitespace-no-wrap text-red-500 text-right min-w-[80px]">
                  <div className="flex justify-center">{crypto.quote.USD.percent_change_1h.toFixed(2)}</div>
                  </td> : <td className="px-4 pt-4  whitespace-no-wrap text-right min-w-[80px]"><div className="flex justify-center">0</div></td>
            }
            {crypto && crypto.percent_change__24h ?
            crypto.percent_change__24h > 0 ? 
                  <td className="px-4 pt-4 whitespace-no-wrap text-green-500 text-right min-w-[80px]">
                  <div className="flex justify-center">{crypto.percent_change__24h.toFixed(2)}</div>
                  </td> : 
                  <td className="px-4 pt-4 whitespace-no-wrap text-red-500 text-right min-w-[80px]">
                  <div className="flex justify-center">{crypto.percent_change__24h.toFixed(2)}</div>
                  </td> : <td className="px-4 pt-4 whitespace-no-wrap  text-right min-w-[80px]"><div className="flex justify-center">0</div></td>
            }
            {crypto && crypto.quote.USD.percent_change_7d ?
            crypto.quote.USD.percent_change_7d > 0 ? 
                  <td className="px-4 pt-4 whitespace-no-wrap text-green-500 text-right min-w-[80px]">
                  <div className="flex justify-center">{crypto.quote.USD.percent_change_7d.toFixed(2)}</div>
                  </td> : 
                  <td className="px-4 pt-4 whitespace-no-wrap text-red-500 text-right min-w-[80px]">
                  <div className="flex justify-center">{crypto.quote.USD.percent_change_7d.toFixed(2)}</div>
                  </td> : <td className="px-4 pt-4 whitespace-no-wrap text-right min-w-[80px]"><div className="flex justify-center">0</div></td>
            }
            <td className="pt-4 whitespace-no-wrap text-white-500  text-right min-w-[100px]" >
              ${crypto?.quote.USD.price ? crypto.quote.USD.price.toLocaleString() : ""}
            </td>
            <td className=" pt-4 whitespace-no-wrap text-white-500 text-right  min-w-[150px]">
              <div className="flex justify-center">${crypto?.quote.USD.market_cap ? crypto.quote.USD.market_cap.toLocaleString() : null}</div>
            </td>

            <td className=" pt-4 whitespace-no-wrap text-white-500 text-right min-w-[100px] ">
              <div className="flex justify-center ">
                {launchDate ? new Date(launchDate).toLocaleDateString() : null}
              </div>
            </td>
  
            <td className=" pt-4 whitespace-no-wrap text-white-500 text-right  ">
              <div className="flex justify-end flex-col">
              <Links getLinks={links[index]} />
              </div>
            </td>

            <td className="  mt-6 whitespace-no-wrap text-white-500 text-right min-w-[100px]">
              <div className="flex justify-end items-center">
            {truncatedAddress}
              </div>
            </td>
            
            <td className="pr-6  mt-6 whitespace-no-wrap text-white-500 text-right min-w-[100px]">
              <div className="">

              </div>
             
            </td>
            
          </tr>
         
          )
              })}
      </tbody>
    </table>
    </div>
  )
}
