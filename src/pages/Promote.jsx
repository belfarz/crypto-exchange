import React, { useState } from 'react'
import fixedImg from "../image/fixed.jpg"
import testImg from "../image/test.jpg"
// import bronze from "../image/bronze-badge.jpg"
// import silver from "../image/silver-badge.jpg"
// import gold from "../image/gold-badge.jpg"
// import diamond from "../image/diamond-badge.jpg"
import {BiMessageRounded} from "react-icons/bi"
import {BsFillSendFill  } from "react-icons/bs"
import {BiMessageDetail } from "react-icons/bi"
import {BsArrowUpRight} from "react-icons/bs"


import MyModal from '../components/MyModal'
// import { NavLink, Outlet } from 'react-router-dom'

export default function Promote() {

    
    //   const IsActive = {
    //     fontWeight: "bold",
    //     background: 'rgba(20, 21, 23, 0.8)',
    //     border: "none",
    //     borderRadius: "4px",
    // }
    const [showMyModal, setShowMyModal] = useState(false)
    const handleOnClose =()=> setShowMyModal(false)
    
  return (
    <div className='mt-24 relative flex-1 ml-2 lg:ml-64 overflow-x-auto'>
      
    <h1 className="ppp text-3xl lg:text-4xl">Promote Packages Prices</h1>

    <div className="flex flex-col lg:flex-row justify-center items-center">
    
    <a className='obh flex m-2 justify-center items-center' href='https://t.me/kojojk'>
      <BsFillSendFill size={25} className='m-1 p-1 bg-purple-800 rounded-full' /> Enter ChatGroup <BsArrowUpRight size={25} className='m-1 p-1 ' />
    </a>
    <a className='obh flex m-2 justify-center items-center' href='https://t.me/Aiden1A'>
      <BiMessageDetail size={25} className='m-1 p-1 bg-purple-800 rounded-full' />Contact Aiden <BsArrowUpRight  size={25} className='m-1 p-1 '/>
    </a>
    <a className='obh flex m-2 justify-center items-center' href='https://t.me/KOJOCAllS'>
      <BiMessageRounded size={25} className='m-1 p-1 bg-purple-800 rounded-full' /> Join KojoCalls Channel <BsArrowUpRight size={25} className='m-1 p-1 ' />
    </a>
    </div>
      

    <div className="flex flex-wrap justify-center">

        <div className="col-4 md:w-1/2 lg:w-1/2 xl:w-1/4 mb-4 p-2 ">
            <div className=" flex flex-col p-2 ">
                <div className=' flex justify-center flex-col mb-4'><img src={fixedImg} alt="" className="w-full max-w-full h-auto" /></div>
                <span className='flex'><input type="radio" name="options" id="option4" className='mr-2 '/> <label id='radio-label' htmlFor="option4" className=''>$200 - 1 DAY  </label> </span>
                <span className='flex'><input type="radio" name="options" id="option5" className='mr-2 '/> <label id='radio-label' htmlFor="option5" className=''>$450 - 3days+channel pin </label> </span>
                <span className='flex'><input type="radio" name="options" id="option6" className='mr-2 '/> <label id='radio-label' htmlFor="option6" className=''>$890 - 7 days+channel pin  </label> </span>    
                <button className="buttonck rounded-full w-full my-2" onClick={()=> setShowMyModal(true)}>BOOK YOUR AD</button>
            </div>
        </div>

        <div className="col-4 md:w-1/2 lg:w-1/2 xl:w-1/4 mb-4 p-2 ">
            <div className=" flex flex-col p-2 ">
                <div className=' flex justify-center flex-col mb-4'><img src={testImg} alt="" className="w-full max-w-full h-auto" /></div>
                <span className='flex'><input type="radio" name="options" id="option1" className='mr-2 '/> <label id='radio-label' htmlFor="option1" className=''>$150 - 1day </label> </span>
                <span className='flex'><input type="radio" name="options" id="option2" className='mr-2 '/> <label id='radio-label' htmlFor="option2" className=''>$390 -3days+channel pin  </label> </span>
                <span className='flex'><input type="radio" name="options" id="option3" className='mr-2 '/> <label id='radio-label' htmlFor="option3" className=''>$550$ -7days+channel pin </label> </span>    

                <button className="buttonck rounded-full w-full my-2" onClick={()=> setShowMyModal(true)}>BOOK YOUR AD</button>
            </div>
        </div>

         <div className="col-4 md:w-1/2 lg:w-1/2 xl:w-1/4 mb-4 p-2 ">
            <div className=" flex flex-col p-2 ">
                <div className=' flex justify-center flex-col mb-4'><img src={testImg} alt="" className="w-full max-w-full h-auto" /></div>
                <span className='flex'><input type="radio" name="options" id="option7" className='mr-2 '/> <label id='radio-label' htmlFor="option7" className=''>$100- 1day+ installation channel </label> </span>
                <span className='flex'><input type="radio" name="options" id="option8" className='mr-2 '/> <label id='radio-label' htmlFor="option8" className=''>$250 - 3days  </label> </span>
                <span className='flex'><input type="radio" name="options" id="option9" className='mr-2 '/> <label id='radio-label' htmlFor="option9" className=''>$450 - 7days  </label> </span>    
                <button className="buttonck rounded-full w-full my-2" onClick={()=> setShowMyModal(true)}>BOOK YOUR AD</button>
            </div>
        </div>


      
        {/* <div className="col-4 md:w-1/2 lg:w-1/2 xl:w-1/4 mb-4 p-2  ">
            <div className=" flex flex-col ">
              <div className="flex justify-center p-2 rounded bg-black ">
                <NavLink to="." end className=' w-1/4 flex justify-center items-center   p-3 text-sm' id='promote-plan' style={({isActive})=> isActive ? IsActive : null}> <div className="flex flex-col justify-center items-center"><img src={bronze} width={15} height={15} alt="" />Bronze</div> </NavLink>
                <NavLink to="silver" className=' w-1/4 flex justify-center items-center  p-3 text-sm' id='promote-plan' style={({isActive})=> isActive ? IsActive : null}><div className="flex flex-col justify-center items-center"><img src={silver} width={15} height={15} alt="" />Silver</div></NavLink>
                <NavLink to="gold" className=' w-1/4 flex justify-center items-center   p-3 text-sm' id='promote-plan' style={({isActive})=> isActive ? IsActive : null}><div className="flex flex-col justify-center items-center"><img src={gold} width={15} height={15} alt="" />Gold</div></NavLink>
                <NavLink to="diamond" className=' w-1/4 flex justify-center items-center p-3 text-sm' style={({isActive})=> isActive ? IsActive : null}><div className="flex flex-col justify-center items-center"><img src={diamond} width={15} height={15} alt="" />Diamond</div></NavLink>
              </div>
              <div className="flex flex-col h-[250px]" >
                    <Outlet />
                   
               </div>
               <button className="buttonck rounded-full w-full bottom-0" onClick={()=> setShowMyModal(true)}>BOOK YOUR AD</button>
            </div>
        </div> */}

   
    </div>
    <MyModal visible={showMyModal} onClose={handleOnClose} />
    </div>


  )
}
