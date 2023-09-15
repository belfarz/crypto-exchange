import React from 'react'
import { HiOutlineUserCircle } from "react-icons/hi"
import { FaReact } from "react-icons/fa"

export default function Navbar() {

 

  return (
    // sidebar
    <div className='sidebar fixed top-0 bottom-0 lg:left-0 w-[250px]  text-center shadow h-screen overflow-y-auto hidden lg:block' id='sidebar'>
      <div className="p-2.5 m-5 pb-10 flex items-center " id='side-border'>
        {/* <i className="bi bi-app-indicator px-2 py-1 bg-blue-600 rounded-md"></i> */}
        <HiOutlineUserCircle style={{ fontSize: '25px', color: 'white'}}/>
        <h1 className="text-[15px]  ml-3  text-gray-200 ">Login / Register</h1>
      </div>
      {/* <hr className="my-2 text-gray-100 " id='hr1'></hr> */}
      <div >
        <div className="p-2.5 mt-2 m-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
          <FaReact style={{ fontSize: '25px', color: 'white'}}/>
          <span className="text-[15px] ml-4 text-gray-200">Coin Ranking</span>
        </div>

        <div className="p-2.5 mt-2 m-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
          <FaReact style={{ fontSize: '25px', color: 'white'}}/>
          <span className="text-[15px] ml-4 text-gray-200">Moon Sheet</span>
        </div>

        <div className="p-2.5 mt-2 m-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
          <FaReact style={{ fontSize: '25px', color: 'white'}}/>
          <span className="text-[15px] ml-4 text-gray-200">Moon Pulse</span>
        </div>

        <div className="p-2.5 mt-2 m-5 pb-10 flex items-center px-4 duration-300 cursor-pointer  hover:bg-blue-600" id='side-border'>
          <FaReact style={{ fontSize: '25px', color: 'white'}}/>
          <span className="text-[15px] ml-4 text-gray-200">Scan Smart Contract</span>
        </div>

        {/* <hr className="my-4 text-gray-600"> */}
        <div className="p-2.5 mt-2 m-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
          <FaReact style={{ fontSize: '25px', color: 'white'}}/>
          <span className="text-[15px] ml-4 text-gray-200">Add coin</span>
        </div>

        <div className="p-2.5 mt-2 m-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600" >
          <FaReact style={{ fontSize: '25px', color: 'white'}}/>
          <span className="text-[15px] ml-4 text-gray-200">Login</span>
        </div>

      </div>
    </div>
  )
}
