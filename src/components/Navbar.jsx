import React,{useState} from 'react'
import { HiOutlineUserCircle } from "react-icons/hi"
import { FaTrophy } from "react-icons/fa"
import {FaRocket } from "react-icons/fa"
import {FaCreditCard } from "react-icons/fa"
import {HiOutlineDocumentAdd } from "react-icons/hi"
import {BsFillMegaphoneFill } from "react-icons/bs"
import { Link } from 'react-router-dom'
import Login from './Login'
export default function Navbar(props) {

  // const {toggle} = props
  const [showMyModal, setShowMyModal] = useState(false)
  const handleOnClose =()=> setShowMyModal(false)

  return (
    // sidebar
    <div className='sidebar fixed top-0 bottom-0 lg:left-0 w-full md:w-[250px] z-[90] text-center shadow h-screen overflow-y-auto hidden lg:block' id='sidebar'>
      {/* <div className="flex justify-end"><MdClose  onClick={toggle} style={{ fontSize: '25px', color: 'white'}}/></div> */}
      <div className="p-2.5 m-5 flex items-center " onClick={()=> setShowMyModal(true)}>
        {/* <i className="bi bi-app-indicator px-2 py-1 bg-blue-600 rounded-md"></i> */}
        <HiOutlineUserCircle id='circle23' className='bg-purple-800 w-[25px] h-[25px] p-1 rounded-md ' style={{ fontSize: '25px', color: 'white'}}/>
        <h1 className="text-[14px]  ml-3  text-gray-200 ">Login / Register</h1>
      </div>
      {/* <hr className="my-2 text-gray-100 " id='hr1'></hr> */}
      <div >
        <Link to="/"><div className="p-2.5 mt-2 m-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  ">
          <FaTrophy style={{ fontSize: '25px', color: 'white'}} className='w-[25px] h-[25px] p-1 rounded-md bg-purple-800'/>
          <span className="text-[14px] ml-4 text-gray-200">Coin Ranking</span>
        </div></Link>

        <Link to="/moonsheet"><div className="p-2.5 mt-2 m-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  ">
          <FaRocket style={{ fontSize: '25px', color: 'white'}} className='w-[25px] h-[25px] p-1 rounded-md bg-purple-800'/>
          <span className="text-[14px] ml-4 text-gray-200">Moon Sheet</span>
        </div></Link>

        <Link to="/scan"><div className="p-2.5 mt-2 m-5  flex items-center px-4 duration-300 cursor-pointer  ">
          <FaCreditCard style={{ fontSize: '25px', color: 'white'}} className='w-[25px] h-[25px] p-1 rounded-md bg-purple-800'/>
          <span className="text-[14px] ml-4 text-gray-200">Scan Smart Contract</span>
        </div></Link>

        {/* <hr className="my-4 text-gray-600"> */}
        <Link to="/addcoin"><div className="p-2.5 mt-2 m-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  ">
          <HiOutlineDocumentAdd style={{ fontSize: '25px', color: 'white'}} className='w-[25px] h-[25px] p-1 rounded-md bg-purple-800'/>
          <span className="text-[14px] ml-4 text-gray-200">Add coin</span>
        </div></Link>

        <Link to="/promote"><div className="p-2.5 mt-2 m-5 flex items-center rounded-md px-4 duration-300 cursor-pointer   " >
          <BsFillMegaphoneFill style={{ fontSize: '25px', color: 'white'}} className='w-[25px] h-[25px] p-1 rounded-md bg-purple-800'/>
          <span className="text-[14px] ml-4 text-gray-200">promote coin</span>
        </div></Link>

      </div>
      <Login visible={showMyModal} onClose={handleOnClose} />
    </div>
  )
}
