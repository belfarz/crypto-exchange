import React from "react";
import MsSearch from "../components/MsSearch";
import { FiArrowDownCircle } from "react-icons/fi"



export default function MoonSheet() {

  

  return (
    <div className='mt-24'>
      <h1 className="text-[35px] text-gray-300 mt-8 mb-8" align="center">MoonSheet</h1>
      <h3 className="text-[16px] text-gray-300 mt-8 mb-8" align="center">Calculate the price of A with the market cap of B</h3>

    <div className="flex flex-col md:flex-row lg:flex-row justify-center">
      <MsSearch />
      <FiArrowDownCircle size={30} className="text-white m-4 ml-10 mr-10" />
      <MsSearch />
    </div>

    </div>
  )
}
