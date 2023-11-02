import React,{useEffect, useState} from 'react'
import add from "../image/ad-1.jpg"
import add1 from "../image/add2.jpg"
import add2 from "../image/add3.jpg"
import add3 from "../image/satoru.gif"


export default function CoinAds() {

  const [number, setNumber] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumber(prevNumber => (prevNumber % 3) + 1); // Increment number from 1 to 4 and reset to 1 after 4
    }, 4000); // Runs every 6 seconds (6000 milliseconds)

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that effect runs once after initial render

  let imageUrl;
  switch (number) {
    case 1:
      imageUrl = add1;
      break;
    case 2:
      imageUrl = add2;
      break;
    case 3:
      imageUrl = add3;
      break;
    default:
      imageUrl = add1;
  }

  const [mobileUrl, setMobileUrl] = useState("")

  useEffect(()=>{
    if (imageUrl === add1) {
      setMobileUrl("https://t.me/BBDG_BSC")
    }else if (imageUrl === add3) {
      setMobileUrl("https://x.com/kojo_io/status/1700268796223885328?s=46")
    }
  },[imageUrl])

  return (
    <div className='flex flex-col justify-center mt-2  lg:ml-64 '>
      <div className='flex justify-center'>
        <div className=' w-full lg:w-[1022px]  bg-white flex justify-center items-center m-2'id='ad-1' > <a href="https://t.me/KOJOCAllS"><img src={add} className='rounded-lg cursor-pointer' alt="" /></a></div>
      </div>
      <div className='flex justify-center  overflow-x-auto '>
        <div className='w-full md:w-[600px]  bg-black flex justify-center items-center m-2 ' ><a href={mobileUrl}> <img src={window.innerWidth < 768 ? imageUrl : add1} className='rounded-lg max-h-[200px] cursor-pointer' alt="" /></a></div>
        <div className=' md:block w-[600px] hidden bg-black lg:flex justify-center items-center m-2 ' > <img src={add2} className='rounded-lg cursor-pointer' alt="" /> </div>
        <div className=' md:block w-[600px] hidden  bg-black lg:flex justify-center items-center m-2 ' ><a href="https://t.me/KOJOCAllS"><img src={add3} className='rounded-lg cursor-pointer' alt="" /></a></div>
      </div>
    </div>
  )
}
