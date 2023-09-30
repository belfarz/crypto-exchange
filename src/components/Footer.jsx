import React from 'react'
import { Link } from 'react-router-dom'
import {TbBrandTelegram} from "react-icons/tb"
import { RiTwitterXFill } from "react-icons/ri"

export default function Footer() {
  return (
    <footer className='w-full lg:pl-64'> 
    <div className="footer-col">
    <h4> Pages</h4>
    <ul>
    <li><Link to="#">Coin Ranking</Link></li>
    <li><Link to="#">Add Coin</Link></li>
    <li><Link to="#">Promote Coin</Link></li>
        </ul>
    </div>
    <div className="footer-col">
      <h4>Company</h4>
      <ul>
      <li><Link to="#">kojo Verify</Link></li>
      <li><Link to="#">Partnerships</Link></li>
      <li><Link to="#">Disclaimer</Link></li>
      <li><Link to="#">Privacy Policy</Link></li>
          </ul>
      </div>
    <div className="footer-col">
    <h4>Follow Us</h4>
    <div className="links"> 
     
     <Link to="#"><TbBrandTelegram /></Link>
    <Link to="#"><RiTwitterXFill /></Link>
      
    </div>
    </div>
    <div className="footer-col">
      <h4><i className="fa-solid fa-building"></i>Kojo.io</h4>
      <ul className="co">
      <li >The number 1 crypto index site for global communities
       .</li>
          </ul>
      </div>
      </footer>
  )
}
