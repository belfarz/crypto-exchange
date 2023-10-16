import React from 'react'
import { useLoaderData } from 'react-router-dom'
// import Chart from "./Chart"
import { getCoin } from './api'
import ChartComponent from './ChartComponent'


export function loader({params}) {
    console.log(params.id)
    return getCoin(params.id)
}

export default function CoinDetails() {

  const chartColors = {
    backgroundColor: 'white',
    lineColor: '#2962FF',
    textColor: 'black',
    areaTopColor: '#2962FF',
    areaBottomColor: 'rgba(41, 98, 255, 0.28)',
  };


        
const initialData = [
	{ time: '2018-12-22', value: 32.51 },
	{ time: '2018-12-23', value: 31.11 },
	{ time: '2018-12-24', value: 27.02 },
	{ time: '2018-12-25', value: 27.32 },
	{ time: '2018-12-26', value: 25.17 },
	{ time: '2018-12-27', value: 28.89 },
	{ time: '2018-12-28', value: 25.46 },
	{ time: '2018-12-29', value: 23.92 },
	{ time: '2018-12-30', value: 22.68 },
	{ time: '2018-12-31', value: 22.67 },
];
    const coinData = useLoaderData()
    console.log(coinData)
  return (
    <div className='flex flex-col justify-start items-start lg:ml-64 mt-[100px] w-full  p-2' id='coindetails'> 

      <div className="flex">
        <div className="flex mr-10">
            <div className=''><img src={coinData.image.large} alt="" width={100} height={100}/></div>
            <div className="flex flex-col justify-center m-5">
                <span className='text-white text-3xl'>{coinData.name}</span>
                <span className='text-white text-lg'>{coinData.symbol}</span>
            </div>
        </div>
        <div className="flex flex-col justify-center">
            <span className='text-gray-400 text-lg'>Price</span>
            <span className='text-white text-3xl'>${coinData.market_data.current_price.usd}</span>
        </div>
      </div>

      <div>
        <p className='text-white'>{coinData.description.en}</p>
      </div>

      {/* <Chart name={coinData.symbol}/> */}




		<ChartComponent colors={chartColors} data={initialData}></ChartComponent>
	
    </div>
  )
}
