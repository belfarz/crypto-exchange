import  React,{useState, useEffect} from 'react'
import { CiStar } from "react-icons/ci";
import { PiArrowsDownUpBold } from 'react-icons/pi';
import { Link} from 'react-router-dom';
import Links from './Link';
import Copy from './Copy';
import ReactPaginate from 'react-paginate';
export default function PromotedCoin(props) {

    const { coin, list, meta, table } = props;
   
   
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
  const  dataResult = coin && Object.values(coin)
  const metaResultArray = meta && Object.values(meta)
  const idCollect = dataResult.map(item => item.id).join(',');
  const currentItems = idCollect.split(',').map(id => dataResult.find(item => item.id === parseInt(id)));
  const invertData = idCollect.split(',').map(id => metaResultArray.find(item => item.id === parseInt(id))); 
  const metadata = invertData.reverse();
  console.log(metadata)
  const TruncatedText = ({ text, maxLength }) => {
    const truncatedText = text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  
    return (
      <span className="truncate">
        {truncatedText}
      </span>
    );
  };

      //----------------------------------------------------//
      const [itemOffset, setItemOffset] = useState(0);
      const itemsPerPage = 10;
      const endOffset = itemOffset + itemsPerPage;
      const dataArray = currentItems.slice(itemOffset, endOffset);
      const metaArray = metadata.slice(itemOffset, endOffset);
      const pageCount = Math.ceil(currentItems.length / itemsPerPage);
      
    
      // Invoke when user click to request another page.
      const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % currentItems.length;
        setItemOffset(newOffset);
      };
        //----------------------------------------------------//
     
       
  

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
          <th className=" py-4  text-right text-xs leading-4 font-bold text-white-500 uppercase tracking-wider min-w-[150px] ">
            <div className="flex text-18 justify-center">
            Market Cap
            {<PiArrowsDownUpBold style={{ fontSize: '14px' }}/>}
            </div>
          </th>

          <th className=" py-4  text-18 text-min-w-[200px] left  text-xs leading-4 font-bold text-white-500 uppercase tracking-wider ">
            <div className="flex text-18  justify-center">Launch Date</div>
          </th>
         
          <th className=" py-4  text-18 text-left text-xs leading-4 font-bold text-white-500 uppercase tracking-wider ">
            <div className="flex text-18  justify-center">Links</div>
          </th>
         
          <th className=" py-4  text-18 text-left text-xs leading-4 font-bold text-white-500 uppercase tracking-wider min-w-[100px]">
            <div className="flex text-18  justify-end">Address</div>
          </th>
          <th className=" py-4  text-18 text-left text-xs leading-4 font-bold text-white-500 uppercase tracking-wider min-w-[100px]">
            <div className="flex text-18  justify-end"> </div>
          </th>
          {/* <th className=" py-4  text-18 text-left text-xs leading-4 font-bold text-white-500 uppercase tracking-wider min-w-[100px]">
            <div className="flex text-18  justify-center">Votes</div>
          </th> */}
        </tr>
        
      </thead>
      <tbody className="">
        {dataArray?.slice().reverse().map((crypto, index) => {

        
        const truncatedName = crypto?.name ? <TruncatedText text={crypto.name} maxLength={8} /> : null;
        const fullName = crypto?.name ? crypto.name : null;
        const currentmeta = metaArray[index]
        const truncatedAddress = currentmeta ? <TruncatedText text={currentmeta.contract_address[0].contract_address} maxLength={6} /> : null;
        const launchDate = currentmeta ? currentmeta.date_launched ? currentmeta.date_launched : currentmeta.date_added : null
          return(
            
          <tr key={crypto?.slug ? crypto.slug : "-"} className=''>
          {/* <Link to={`coin/${crypto.id}`} className='flex'></Link> */}
            <td className="pr-2 pt-2 whitespace-no-wrap  w-[30px]">
              <div className="flex justify-center items-center">
              {<CiStar style={{ fontSize: '24px' }} />}
              </div>
            </td>
            <td className=" my-4  min-w-[150px]   whitespace-no-wrap text-white-500 flex sticky left-0 lg:max-w-[250px]"  id='coin-1-row'>
            <Link 
              to={`coin/${crypto?.slug}`} 
              state={{type : "normal",cmc_id : crypto?.id}}
              className='flex whitespace-no-wrap sticky left-0  lg:max-w-[250px]'
            >
            <img
              src={currentmeta ? currentmeta.logo : ""}
              alt=""
              className="coin_image p-2"
            />
              <div className='flex flex-col justify-around'>
                <p className='text-xs'>{crypto?.symbol ? crypto.symbol : null }</p>
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
              ${crypto?.quote.USD.price ? crypto.quote.USD.price.toFixed(5) : ""}
            </td>
            <td className=" pt-4 whitespace-no-wrap text-white-500 text-right  min-w-[150px]">
              <div className="flex justify-center">${crypto?.self_reported_market_cap ? crypto?.self_reported_market_cap?.toLocaleString() : crypto?.quote.USD.market_cap?.toLocaleString()}</div>
            </td>

            <td className=" pt-4 whitespace-no-wrap text-white-500 text-right min-w-[200px] ">
              <div className="flex justify-center ">
                {launchDate ? new Date(launchDate).toLocaleDateString() : null}
              </div>
            </td>
            
            <td className=" pt-4 whitespace-no-wrap text-white-500 text-right  ">
              <div className="flex justify-end flex-col">
              <Links getLinks={currentmeta ? currentmeta.urls : null} />
              </div>
            </td>

            <td className="  mt-6 whitespace-no-wrap text-white-500 text-right min-w-[100px]">
              <div className="flex justify-end items-center">
               {truncatedAddress} 
               <Copy text={currentmeta ? currentmeta.contract_address[0].contract_address : null} />

              </div>
            </td>
            
            <td className="pr-6  mt-6 whitespace-no-wrap text-white-500 text-right min-w-[100px]">
              <div className="flex justify-center">
              {/* hello world */}
              </div>
             
            </td>
            
          </tr>
         
          )
              })}
      </tbody>
    </table>
    {table ? (
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
    ) : null}
    </div>
  )
}
