import  React from 'react'
import { CiStar } from "react-icons/ci";
import { PiArrowsDownUpBold } from 'react-icons/pi';
import testImg from "../image/test.png"
import { Link} from 'react-router-dom';
export default function Coin(props) {

  // const [width, setWidth] = useState(50);
  // const maxWidth = 100; // Set your maximum width here

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
        <table className="min-w-full " id='table'>
      <thead>
        <Link>
        <tr>
        <th className="px-6 py-4  text-left text-xs leading-4 font-medium text-white-500 uppercase tracking-wider ">
            #
          </th>
          <th className=" py-4  text-right text-xs leading-4 font-medium text-white-500 uppercase tracking-wider sticky left-0 min-w-[150px]" id='coin-1-row'>
            <div className="flex text-18">
            {list}
            {<PiArrowsDownUpBold style={{ fontSize: '14px' }}/>}
            </div>
          </th>
          <th className="  text-xs leading-4 font-medium text-white-500 uppercase tracking-wider min-w-[60px] ">
            <div className="flex justify-center text-18 pr-2">
            1H
            {<PiArrowsDownUpBold style={{ fontSize: '14px' }}/>}
            </div>
          </th>
          <th className="  text-xs leading-4 font-medium text-white-500 uppercase tracking-wider min-w-[100px] ">
           <div className="flex  justify-center text-18"> 24H
            {<PiArrowsDownUpBold style={{ fontSize: '14px' }}/>}</div>
          </th>
          <th className="  text-xs leading-4 font-medium text-white-500 uppercase tracking-wider min-w-[100px] ">
            <div className="flex justify-center text-18 pr-2">
            7d
            {<PiArrowsDownUpBold style={{ fontSize: '14px' }}/>}
            </div>
          </th>
          <th className=" py-4  text-right text-xs leading-4 font-medium text-white-500 uppercase tracking-wider min-w-[100px] ">
            <div className="flex text-18 justify-end pl-3 ">
            Price
            {<PiArrowsDownUpBold style={{ fontSize: '14px' }}/>}
            </div>
          </th>
          <th className=" py-4  text-right text-xs leading-4 font-medium text-white-500 uppercase tracking-wider min-w-[200px] ">
            <div className="flex text-18  justify-end">
            Market Cap
            {<PiArrowsDownUpBold style={{ fontSize: '14px' }}/>}
            </div>
          </th>
          <th className=" py-4  text-18 text-left text-xs leading-4 font-medium text-white-500 uppercase tracking-wider min-w-[150px]">
            <div className="flex text-18 justify-end ">Social</div>
          </th>
          <th className=" py-4  text-18 text-left text-xs leading-4 font-medium text-white-500 uppercase tracking-wider min-w-[100px]">
            <div className="flex text-18  justify-end">Links</div>
          </th>
          <th className=" py-4  text-18 text-left text-xs leading-4 font-medium text-white-500 uppercase tracking-wider min-w-[100px]">
            <div className="flex text-18  justify-end">Votes</div>
          </th>
        </tr>
        </Link>
      </thead>
      <tbody className=" ">
        {coin.map((crypto) => {
        
          // const vote = () => {
          //   if (width < maxWidth) {
          //     setWidth(prevWidth => prevWidth + 5); // Increase width by 5 pixels on each click
          //   } else {
          //     alert('Div is fully filled!');
          //   }
          // };
          
          return(
            
          <tr key={crypto?.market_cap_rank ? crypto.market_cap_rank : "-"} className=''>
          <Link to={`coin/${crypto.id}`}className='flex'>
            <td className="px-2 py-4 whitespace-no-wrap text-white-500">
              {<CiStar style={{ fontSize: '24px' }} />}
            </td>
            <td className=" py-4 min-w-[150px] whitespace-no-wrap text-white-500 flex sticky left-0" id='coin-1-row'>
            <img
              src={crypto && crypto.image ? crypto.image : testImg}
              alt=""
              className="coin_image p-2"
            />
              <div className='flex flex-col'>
                <p>{crypto?.symbol ? crypto.symbol : null }</p>
                <p><TruncatedText text={crypto?.name ? crypto.name : null} maxLength={8} /></p> 
              </div>
            </td>
            {crypto && crypto.price_change_percentage_1h_in_currency ?
            crypto.price_change_percentage_1h_in_currency > 0 ? 
                  <td className="px-4 py-4 whitespace-no-wrap text-green-500 text-right min-w-[80px]">
                  {crypto.price_change_percentage_1h_in_currency.toFixed(2)}
                  </td> : 
                  <td className="px-4 py-4 whitespace-no-wrap text-red-500 text-right min-w-[80px]">
                  {crypto.price_change_percentage_1h_in_currency.toFixed(2)}
                  </td> : <td className="px-4 py-4 whitespace-no-wrap text-right min-w-[80px]">-</td>
            }
            {crypto && crypto.price_change_percentage_24h_in_currency ?
            crypto.price_change_percentage_24h_in_currency > 0 ? 
                  <td className="px-4 py-4 whitespace-no-wrap text-green-500 text-right min-w-[80px]">
                  {crypto.price_change_percentage_24h_in_currency.toFixed(2)}
                  </td> : 
                  <td className="px-4 py-4 whitespace-no-wrap text-red-500 text-right min-w-[80px]">
                  {crypto.price_change_percentage_24h_in_currency.toFixed(2)}
                  </td> : <td className="px-4 py-4 whitespace-no-wrap  text-right min-w-[80px]">-</td>
            }
            {crypto && crypto.price_change_percentage_7d_in_currency ?
            crypto.price_change_percentage_7d_in_currency > 0 ? 
                  <td className="px-4 py-4 whitespace-no-wrap text-green-500 text-right min-w-[80px]">
                  {crypto.price_change_percentage_7d_in_currency.toFixed(2)}
                  </td> : 
                  <td className="px-4 py-4 whitespace-no-wrap text-red-500 text-right min-w-[80px]">
                  {crypto.price_change_percentage_7d_in_currency.toFixed(2)}
                  </td> : <td className="px-4 py-4 whitespace-no-wrap text-right min-w-[80px]">-</td>
            }
            <td className="pr-6 py-4 whitespace-no-wrap text-white-500  text-right min-w-[100px]" >
              ${crypto?.current_price ? crypto.current_price.toLocaleString() : ""}
            </td>
            <td className="pr-6 py-4 whitespace-no-wrap text-white-500 text-right  min-w-[200px]">
              ${crypto?.market_cap ? crypto.market_cap.toLocaleString() : null}
            </td>
            <td className="pr-6 py-4 whitespace-no-wrap text-white-500 text-right  min-w-[150px]">
              coming
            </td>
            <td className="pr-6 py-4 whitespace-no-wrap text-white-500 text-right  flex min-w-[150px]">
             coming
            </td></Link>
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
