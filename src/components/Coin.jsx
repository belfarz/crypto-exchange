import React from 'react'
import { CiStar } from "react-icons/ci";
import { PiArrowsDownUpDuotone } from 'react-icons/pi';
import testImg from "../image/test.png"
import { Link } from 'react-router-dom';
export default function Coin(props) {
    const { coin, list } = props;
  return (
    <div>
        <table className="min-w-full " id='table'>
      <thead>
        <Link>
        <tr>
        <th className="px-6 py-4  text-left text-xs leading-4 font-medium text-white-500 uppercase tracking-wider ">
            #
          </th>
          <th className="px-6 py-4  text-right text-xs leading-4 font-medium text-white-500 uppercase tracking-wider sticky left-0 min-w-[250px]" id='coin-1-row'>
            <div className="flex text-18">
            {list}
            {<PiArrowsDownUpDuotone style={{ fontSize: '18px' }}/>}
            </div>
          </th>
          <th className="  text-xs leading-4 font-medium text-white-500 uppercase tracking-wider min-w-[100px] ">
            <div className="flex justify-end text-18">
            1H
            {<PiArrowsDownUpDuotone style={{ fontSize: '18px' }}/>}
            </div>
          </th>
          <th className="  text-xs leading-4 font-medium text-white-500 uppercase tracking-wider min-w-[100px] ">
           <div className="flex  justify-end text-18"> 24H
            {<PiArrowsDownUpDuotone style={{ fontSize: '18px' }}/>}</div>
          </th>
          <th className="  text-xs leading-4 font-medium text-white-500 uppercase tracking-wider min-w-[100px] ">
            <div className="flex justify-end text-18">
            7d
            {<PiArrowsDownUpDuotone style={{ fontSize: '18px' }}/>}
            </div>
          </th>
          <th className=" py-4 pr-6 text-right text-xs leading-4 font-medium text-white-500 uppercase tracking-wider min-w-[100px] ">
            <div className="flex text-18 justify-start pl-3 ">
            Price
            {<PiArrowsDownUpDuotone style={{ fontSize: '18px' }}/>}
            </div>
          </th>
          <th className=" py-4  text-right text-xs leading-4 font-medium text-white-500 uppercase tracking-wider min-w-[150px] ">
            <div className="flex text-18 pl-3 text-right">
            Market Cap
            {<PiArrowsDownUpDuotone style={{ fontSize: '18px' }}/>}
            </div>
          </th>
          <th className=" py-4  text-18 text-left text-xs leading-4 font-medium text-white-500 uppercase tracking-wider min-w-[100px]">
            <div className="flex text-18  ">Social</div>
          </th>
          <th className=" py-4  text-18 text-left text-xs leading-4 font-medium text-white-500 uppercase tracking-wider min-w-[100px]">
            <div className="flex text-18  ">Links</div>
          </th>
          <th className=" py-4  text-18 text-left text-xs leading-4 font-medium text-white-500 uppercase tracking-wider min-w-[100px]">
            <div className="flex text-18  ">Launch Date</div>
          </th>
        </tr>
        </Link>
      </thead>
      <tbody className=" ">
        {coin.map((crypto) => (
          <Link to={`coin/${crypto.id}`}>
          <tr key={crypto?.market_cap_rank ? crypto.market_cap_rank : "-"}>
            
            <td className="px-6 py-4 whitespace-no-wrap text-white-500">
              {<CiStar style={{ fontSize: '24px' }} />}
            </td>
            <td className="px-6 py-4 min-w-[250px] whitespace-no-wrap text-white-500 flex sticky left-0" id='coin-1-row'>
            <img
              src={crypto && crypto.image ? crypto.image : testImg}
              alt=""
              className="coin_image p-2"
            />
              <div className='flex flex-col'>
                <p>{crypto?.symbol ? crypto.symbol : null }</p>
                <p>{crypto?.name ? crypto.name : null}</p>
              </div>
            </td>
            {crypto && crypto.price_change_percentage_1h_in_currency ?
            crypto.price_change_percentage_1h_in_currency > 0 ? 
                  <td className="px-6 py-4 whitespace-no-wrap text-green-500 text-right min-w-[100px]">
                  {crypto.price_change_percentage_1h_in_currency.toFixed(2)}
                  </td> : 
                  <td className="px-6 py-4 whitespace-no-wrap text-red-500 text-right min-w-[100px]">
                  {crypto.price_change_percentage_1h_in_currency.toFixed(2)}
                  </td> : null
            }
            {crypto && crypto.price_change_percentage_24h_in_currency ?
            crypto.price_change_percentage_24h_in_currency > 0 ? 
                  <td className="px-6 py-4 whitespace-no-wrap text-green-500 text-right min-w-[100px]">
                  {crypto.price_change_percentage_24h_in_currency.toFixed(2)}
                  </td> : 
                  <td className="px-6 py-4 whitespace-no-wrap text-red-500 text-right min-w-[100px]">
                  {crypto.price_change_percentage_24h_in_currency.toFixed(2)}
                  </td> :null
            }
            {crypto && crypto.price_change_percentage_7d_in_currency ?
            crypto.price_change_percentage_7d_in_currency > 0 ? 
                  <td className="px-6 py-4 whitespace-no-wrap text-green-500 text-right min-w-[100px]">
                  {crypto.price_change_percentage_7d_in_currency.toFixed(2)}
                  </td> : 
                  <td className="px-6 py-4 whitespace-no-wrap text-red-500 text-right min-w-[100px]">
                  {crypto.price_change_percentage_7d_in_currency.toFixed(2)}
                  </td> : null
            }
            <td className="pr-6 py-4 whitespace-no-wrap text-white-500 flex text-right min-w-[100px]" >
              ${crypto?.current_price ? crypto.current_price.toLocaleString() : null}
            </td>
            <td className="pr-6 py-4 whitespace-no-wrap text-white-500 text-right  min-w-[100px]">
              ${crypto?.market_cap ? crypto.market_cap.toLocaleString() : null}
            </td>
            <td className="pr-6 py-4 whitespace-no-wrap text-white-500 text-right  min-w-[100px]">
              {crypto?.symbol ? crypto.symbol : null}
            </td>
            <td className="pr-6 py-4 whitespace-no-wrap text-white-500 text-right  min-w-[100px]">
              ${crypto?.price ? crypto.price : null}
            </td>
            <td className="pr-6 py-4 whitespace-no-wrap text-white-500 text-right  min-w-[100px]">
              ${crypto?.price ? crypto.price : null}
            </td>
          </tr>
          </Link>
        ))}
      </tbody>
    </table>
    </div>
  )
}
