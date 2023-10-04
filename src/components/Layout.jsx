import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import {BsBuildings} from "react-icons/bs"
// import {HiOutlineSearch} from "react-icons/hi"
import { GiHamburgerMenu } from "react-icons/gi"
// import { Link } from 'react-router-dom'
import Footer from './Footer'
// import Sticker from './Sticker'
export default function Layout() {

  function Openbar() {
    
    const element = document.querySelector('#sidebar')
    const style = "hidden"

    if (element.classList.contains(style)) {
      if (window.innerWidth > 765 ) {
        element.classList.remove("hidden")
        element.classList.remove("z-[99]")
        element.classList.add("block")
        // document.querySelector('#outlet').classList.remove("ml-2")
        // document.querySelector('#outlet').classList.add("ml-64")
      }else{
        element.classList.remove("hidden")
        element.classList.add("block")
        element.classList.add("w-full")
      }
    }else{
      element.classList.remove("block")
      element.classList.add("hidden")
      // document.querySelector('#outlet').classList.remove("ml-64")
      // document.querySelector('#outlet').classList.add("ml-2")
    }
  }

  return (
    // top nav bar
    <div>
    <div className="fixed top-0 left-0 right-0 p-2 bg-blue-900 flex justify-center z-[99] " id='topbar'>
        <div className='p-1 flex items-center rounded-md '>
            <BsBuildings style={{ fontSize: '35px', color: 'white'}}/> <span className='text-[15px]  ml-3 text-xl text-gray-200 font-100'>KOJO CALLS</span>
        </div>

        <div className="p-1 flex items-center rounded-md px-4 duration-300 cursor-pointerw-auto bg-transparent ml-auto lg:ml-0">
          {/* <HiOutlineSearch className='bi bi-search ' style={{ fontSize: '25px', color: 'white'}}/>
          <input className="text-[16px] lg:ml-4 m-1 p-0 bg-transparent focus:outline-none lg:w-[410px] w-[0px] ml-0"  id='place' placeholder='Search by coin name, symbol or contract address'/> */}
          <GiHamburgerMenu style={{ fontSize: '25px', color: 'white'}} className='m-2 lg:hidden' onClick={Openbar}/>
        </div>

        {/* <div className="flex items-center ">
        
       <Link to="addCoin"><span className='bg-purple-800 text-white font-semibold py-2 px-8 rounded lg:block hidden'>Add Coin</span></Link> 
        </div> */}
        

    </div> 

    {/* <Sticker />  */}
    <div className='flex flex-col justify-center mt-28 mb-6 lg:ml-64'>
      <div className='flex justify-center'>
        <div className=' w-full md:w-1/3 h-32 bg-white flex justify-center items-center rounded-lg' ><h1>TOP ADVERT</h1> </div>
      </div>
      <div className='flex justify-center my-5 overflow-x-auto'>
      <div className='w-full md:w-1/4  h-28 bg-white flex justify-center items-center m-4 rounded-lg' ><h1>Left ADVERT</h1> </div>
      <div className=' md:block w-1/4 hidden h-28 bg-white lg:flex justify-center items-center m-4 rounded-lg' ><h1>Middle ADVERT</h1> </div>
      <div className=' md:block w-1/4 hidden  h-28 bg-white lg:flex justify-center items-center m-4 rounded-lg' ><h1> ADVERT</h1> </div>
      </div>
    </div>

    <div className='flex '>
          <Navbar toggle={Openbar} />
        
          
            <Outlet />
       
        
    </div>
    
      <Footer className='mt-auto' />
    
    </div>
  )
}
