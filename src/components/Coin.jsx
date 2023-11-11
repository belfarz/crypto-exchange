import  React,{useState, useEffect} from 'react'
import axios from 'axios';
import { CiStar } from "react-icons/ci";
import { PiArrowsDownUpBold } from 'react-icons/pi';
import { Link} from 'react-router-dom';
// import Links from './Link';
// import { links } from './api';
// import { useState } from 'react';

export default function Coin(props) {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { coin, list, table } = props;
  const [meta, setMeta] = useState([])
  const idCollect = coin.map(item => item.id).join(',');
  
  console.log(idCollect)
  useEffect(()=>{
    const fetchCoinData = async () => {
      try {
        const response = await axios.post('https://kojocalls.onrender.com/api/metadata', {
            coinIds: coin.map(item => item.id).join(','), // string of coin slugs
          });
          setMeta(response.data.data)
          console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    fetchCoinData();
  },[idCollect,coin])

  const metadata = meta && Object.values(meta)
  const resultArray = idCollect.split(',').map(id => metadata.find(item => item.id === parseInt(id)));
  console.log(coin)
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
        <table className=" lg:w-full pr-10" id='table'>
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
          <th className="  text-xs leading-4 font-bold text-white-500 uppercase tracking-wider min-w-[65px] ">
            <div className="flex justify-center text-18 ">
            1H
            {<PiArrowsDownUpBold style={{ fontSize: '14px' }}/>}
            </div>
          </th>
          <th className="  text-xs leading-4 font-bold text-white-500 uppercase tracking-wider min-w-[65px] ">
           <div className="flex  justify-center text-18"> 24H
            {<PiArrowsDownUpBold style={{ fontSize: '14px' }}/>}</div>
          </th>
          <th className="  text-xs leading-4 font-bold text-white-500  uppercase tracking-wider min-w-[65px] ">
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
          <th className=" py-4  text-right text-xs leading-4 font-bold text-white-500 uppercase tracking-wider min-w-[180px] ">
            <div className="flex text-18 justify-center">
            Market Cap
            {<PiArrowsDownUpBold style={{ fontSize: '14px' }}/>}
            </div>
          </th>
     
          
          {/* <th className=" py-4  text-18 text-left text-xs leading-4 font-bold text-white-500 uppercase tracking-wider min-w-[100px]">
            <div className="flex text-18  justify-end">Votes</div>
          </th> */}
        </tr>
        
      </thead>
      <tbody className="">
        {coin.map((crypto,index) => {

        const currentmeta = resultArray[index]
        const truncatedName = crypto?.name ? <TruncatedText text={crypto.name} maxLength={8} /> : null;
        const fullName = crypto?.name ? crypto.name : null;
          return(
            
          <tr key={crypto?.slug ? crypto.slug : "-"} className=''>
          {/* <Link to={`coin/${crypto.id}`} className='flex'></Link> */}
            <td className="pr-2 pt-2 whitespace-no-wrap  max-w-[30px]">
            <div className="flex justify-center items-center">
              {<CiStar style={{ fontSize: '24px' }} />}
              </div>
            </td>
            <td className=" my-4  min-w-[150px]   whitespace-no-wrap text-white-500 flex sticky left-0 lg:max-w-[250px]"  id='coin-1-row'>
            <Link 
              to={`coin/${crypto.slug}`} 
              className='flex whitespace-no-wrap sticky left-0  lg:max-w-[250px]'
              state={{type : table ? "normal" : "promoted",tables: table,cmc_id : crypto.id}}
            >
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
                  <td className="px-2 lg:px-4 pt-4  whitespace-no-wrap text-green-500 text-right min-w-[65px]">
                  <div className="flex justify-center">{crypto.quote.USD.percent_change_1h.toFixed(2)}</div>
                  </td> : 
                  <td className="px-2 lg:px-4 pt-4  whitespace-no-wrap text-red-500 text-right min-w-[65px]">
                  <div className="flex justify-center">{crypto.quote.USD.percent_change_1h.toFixed(2)}</div>
                  </td> : <td className="px-2 lg:px-4 pt-4  whitespace-no-wrap text-right min-w-[65px]"><div className="flex justify-center">0</div></td>
            }
            {crypto && crypto.quote.USD.percent_change_24h ?
            crypto.quote.USD.percent_change__24h > 0 ? 
                  <td className="px-2 lg:px-4 pt-4 whitespace-no-wrap text-green-500 text-right min-w-[65px]">
                  <div className="flex justify-center">{crypto.quote.USD.percent_change_24h.toFixed(2)}</div>
                  </td> : 
                  <td className="px-2 lg:px-4 pt-4 whitespace-no-wrap text-red-500 text-right min-w-[65px]">
                  <div className="flex justify-center">{crypto.quote.USD.percent_change_24h.toFixed(2)}</div>
                  </td> : <td className="px-2 lg:px-4 pt-4 whitespace-no-wrap  text-right min-w-[65px]"><div className="flex justify-center">0</div></td>
            }
            {crypto && crypto.quote.USD.percent_change_7d ?
            crypto.quote.USD.percent_change_7d > 0 ? 
                  <td className="px-2 lg:px-4 pt-4 whitespace-no-wrap text-green-500 text-right min-w-[65px]">
                  <div className="flex justify-center">{crypto.quote.USD.percent_change_7d.toFixed(2)}</div>
                  </td> : 
                  <td className="px-2 lg:px-4 pt-4 whitespace-no-wrap text-red-500 text-right min-w-[65px]">
                  <div className="flex justify-center">{crypto.quote.USD.percent_change_7d.toFixed(2)}</div>
                  </td> : <td className="px-2 lg:px-4 pt-4 whitespace-no-wrap text-right min-w-[65px]"><div className="flex justify-center">0</div></td>
            }
            <td className="pt-4 whitespace-no-wrap text-white-500  text-right min-w-[100px]" >
              ${crypto?.quote.USD.price ? crypto.quote.USD.price.toLocaleString() : ""}
            </td>
            <td className=" pt-4 whitespace-no-wrap text-white-500 text-right  min-w-[180px]">
              <div className="flex justify-center">${crypto?.self_reported_market_cap ? crypto.self_reported_market_cap.toLocaleString() : crypto.quote.USD.market_cap.toLocaleString()}</div>
            </td>
            
     

          
            
            {/* <td className="pr-6  mt-6 whitespace-no-wrap text-white-500 text-right min-w-[100px]">
              <div className="">

              </div>
             
            </td> */}
            
          </tr>
         
          )
              })}
      </tbody>
    </table>
    </div>
  )
}
