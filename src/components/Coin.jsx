import React from 'react'
import { CiStar } from "react-icons/ci";
import { PiArrowsDownUpDuotone } from 'react-icons/pi';

export default function Coin(props) {
    const { coin } = props;
  return (
    <div>
        <table className="min-w-full" id='table'>
      <thead>
        <tr>
        <th className="px-6 py-3  text-left text-xs leading-4 font-medium text-white-500 uppercase tracking-wider ">
            #
          </th>
          <th className="px-6 py-3  text-left text-xs leading-4 font-medium text-white-500 uppercase tracking-wider sticky left-0 " id='coin-1-row'>
            <div className="flex text-18">
            Coin
            {<PiArrowsDownUpDuotone style={{ fontSize: '18px' }}/>}
            </div>
          </th>
          <th className="px-6 py-3  text-left text-xs leading-4 font-medium text-white-500 uppercase tracking-wider ">
            <div className="flex text-18">
            1H
            {<PiArrowsDownUpDuotone style={{ fontSize: '18px' }}/>}
            </div>
          </th>
          <th className="px-6 py-3  text-left text-xs leading-4 font-medium text-white-500 uppercase tracking-wider ">
           <div className="flex text-18"> 24H
            {<PiArrowsDownUpDuotone style={{ fontSize: '18px' }}/>}</div>
          </th>
          <th className="px-6 py-3  text-left text-xs leading-4 font-medium text-white-500 uppercase tracking-wider ">
            <div className="flex text-18">
            7d
            {<PiArrowsDownUpDuotone style={{ fontSize: '18px' }}/>}
            </div>
          </th>
          <th className="px-6 py-3  text-left text-xs leading-4 font-medium text-white-500 uppercase tracking-wider ">
            <div className="flex text-18">
            Price
            {<PiArrowsDownUpDuotone style={{ fontSize: '18px' }}/>}
            </div>
          </th>
          <th className="px-6 py-3  text-left text-xs leading-4 font-medium text-white-500 uppercase tracking-wider ">
            <div className="flex text-18">
            Market Cap
            {<PiArrowsDownUpDuotone style={{ fontSize: '18px' }}/>}
            </div>
          </th>
          <th className="px-6 py-3  text-18 text-left text-xs leading-4 font-medium text-white-500 uppercase tracking-wider">
            Social
          </th>
          <th className="px-6 py-3  text-18 text-left text-xs leading-4 font-medium text-white-500 uppercase tracking-wider">
            Links
          </th>
          <th className="px-6 py-3  text-18 text-left text-xs leading-4 font-medium text-white-500 uppercase tracking-wider">
            Launch Date
          </th>
        </tr>
      </thead>
      <tbody className=" ">
        {coin.map((crypto) => (
          <tr key={crypto.market_cap_rank}>
            <td className="px-6 py-4 whitespace-no-wrap text-white-500">
              {<CiStar style={{ fontSize: '24px' }} />}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-white-500 flex sticky left-0" id='coin-1-row'>
              <img src={crypto.image} alt="" className='coin_image p-2'/>
              <div className='flex flex-col'>
                <p>{crypto.symbol}</p>
                <p>{crypto.name}</p>
              </div>
            </td>
            {crypto.price_change_percentage_1h_in_currency > 0 ? 
                  <td className="px-6 py-4 whitespace-no-wrap text-green-500 text-right">
                  {crypto.price_change_percentage_1h_in_currency.toFixed(2)}
                  </td> : 
                  <td className="px-6 py-4 whitespace-no-wrap text-red-500 text-right">
                  {crypto.price_change_percentage_1h_in_currency.toFixed(2)}
                  </td>
            }
            {crypto.price_change_percentage_24h_in_currency > 0 ? 
                  <td className="px-6 py-4 whitespace-no-wrap text-green-500 text-right">
                  {crypto.price_change_percentage_24h_in_currency.toFixed(2)}
                  </td> : 
                  <td className="px-6 py-4 whitespace-no-wrap text-red-500 text-right">
                  {crypto.price_change_percentage_24h_in_currency.toFixed(2)}
                  </td>
            }
            {crypto.price_change_percentage_7d_in_currency > 0 ? 
                  <td className="px-6 py-4 whitespace-no-wrap text-green-500 text-right">
                  {crypto.price_change_percentage_7d_in_currency.toFixed(2)}
                  </td> : 
                  <td className="px-6 py-4 whitespace-no-wrap text-red-500 text-right">
                  {crypto.price_change_percentage_7d_in_currency.toFixed(2)}
                  </td>
            }
            <td className="px-6 py-4 whitespace-no-wrap text-white-500">
              ${crypto.current_price.toLocaleString()}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-white-500">
              ${crypto.market_cap.toLocaleString()}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-white-500">
              {crypto.symbol}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-white-500">
              ${crypto.price}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-white-500">
              ${crypto.price}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}
