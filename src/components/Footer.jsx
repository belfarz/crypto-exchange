import React from 'react'
import { Link } from 'react-router-dom'
import {TbBrandTelegram} from "react-icons/tb"
import { RiTwitterXFill } from "react-icons/ri"

import { TbMail } from 'react-icons/tb'
export default function Footer() {
  return (
    <footer className='w-full lg:pl-64 flex justify-center lg:justify-around'> 
      <div className='pl-5 mb-2 lg:mb-2' >
          <div className='p-1 flex items-center rounded-md '>
            <span className='text-[15px]  ml-3 text-xl text-gray-200 font-100'>KOJO TOKEN</span>
          </div>
          <div className='flex mt-5'>
          <a href="https://t.me/KOJOCAllS" target="_blank" rel="noopener noreferrer">
            
              <TbBrandTelegram style={{ fontSize: '25px', color: 'white'}} className='w-[40px] h-[40px] m-2 p-2 rounded-full bg-black' id='footer_icon'/>
            
          </a>
          <a href="https://x.com/kojo_io/status/1700268796223885328?s=46" target="_blank" rel="noopener noreferrer">
            <RiTwitterXFill style={{ fontSize: '25px', color: 'white'}} className='w-[40px] h-[40px] m-2 p-2 rounded-full bg-black' id='footer_icon'/>
          </a>

        
          <Link to="#">
            
              <TbMail style={{ fontSize: '25px', color: 'white'}} className='w-[40px] h-[40px] m-2 p-2 rounded-full bg-black' id='footer_icon'/>
            
          </Link>
          </div>
         
      </div>

      </footer>
  )
}


// <div className="footer-col">
//     <h4> Pages</h4>
//     <ul>
//     <li><Link to="#">Coin Ranking</Link></li>
//     <li><Link to="#">Add Coin</Link></li>
//     <li><Link to="#">Promote Coin</Link></li>
//         </ul>
//     </div>
//     <div className="footer-col">
//       <h4>Company</h4>
//       <ul>
//       <li><Link to="#">kojo Verify</Link></li>
//       <li><Link to="#">Partnerships</Link></li>
//       <li><Link to="#">Disclaimer</Link></li>
//       <li><Link to="#">Privacy Policy</Link></li>
//           </ul>
//       </div>
//     <div className="footer-col">
//     <h4>Follow Us</h4>
//     <div className="links"> 
     
//      <Link to="#"><TbBrandTelegram /></Link>
//     <Link to="#"><RiTwitterXFill /></Link>
      
//     </div>
//     </div>
//     <div className="footer-col">
//       <h4><i className="fa-solid fa-building"></i>Kojo.io</h4>
//       <ul className="co">
//       <li >The number 1 crypto index site for global communities
//        .</li>
//           </ul>
//       </div>