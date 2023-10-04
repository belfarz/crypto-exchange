import React from 'react'

export default function Scan() {
  return (
    <div className=' pt-20 h-full relative flex-1 lg:ml-64  overflow-x-auto' id='scan_container'>
      <div className="flex flex-col md:flex-row">
        <div className="flex ">
          <select name="scan" id="scan" className='p-1 rounded text-gray-400 focus:outline-none'>
            <option value="bsc">Bsc</option>
            <option value="eth">Eth</option>
            <option value="arbitrum">Arbitrum</option>
            <option value="polygon">Polygon</option>
            <option value="heco">Heco</option>
            <option value="harmonyOn">Harmony</option>
            <option value="cronos">Cronos</option>
          </select>
          <input type="text" id='scan' className='focus:outline-none p-1 rounded text-gray-400 ml-5 mr-5 w-full  md:w-96'/>
        </div>
        <button className='bg-orange-400 pl-10 pr-10 p-2  rounded text-[12px] text-white font-bold  mt-4 md:mt-0'>Check</button>
      </div>
    </div>
  )
}
