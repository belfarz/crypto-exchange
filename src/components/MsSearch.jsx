import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import axios from "axios";
// import { AiOutlineSearch } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri"
export default function MsSearch({coin}) {

    const [countries, setCountries] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);
  
    useEffect(() => {
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en',{
        method: 'GET', // This is optional for GET requests as GET is the default method.
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          // Additional headers can be added here if needed.
        },
      })
        .then((response) => {
          setCountries(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);

    // const display = selected ? countries : (countries ? countries.slice(0, 200) : null)
    const display = countries
  return (
    <div className=" w-200 font-medium ">
    <div
      onClick={() => {
        setOpen(!open)
      }}
      className={`bg-black w-full p-2 flex items-center justify-between rounded-full  ${
        !selected && "text-gray-700"
      }`}
    >
       <div className="flex items-center min-w-[300px]">
       <input
          id="searchParam"
          type="text"
          value={inputValue}
          onChange={(e) =>{
            setInputValue(e.target.value.toLowerCase())
            setSelected("")
          }}
          placeholder="select.."
          className={`placeholder:text-gray-400 text-white p-2 outline-none bg-transparent ${selected ? "w-2" : ""}`}
        />
      <span className="text-white left-6">
      {selected
        ? selected
        : ""}
      </span>
       </div>
      <div className="flex items-center">
      {selected ? <RiCloseLine size={20} onClick={()=> setSelected("")} className="text-white "/> : ""}
      <span className="border-l border-white"><BiChevronDown size={25} className={` text-white  ${open && "rotate-180 "}`} /></span>
      </div>
    </div>
    <ul
      className={`bg-black text-white mt-2 overflow-y-auto absolute ${window.innerWidth < 769 ? 'absolute w-full' : ''} ${
        open ? "max-h-60 " : "max-h-0"
      } `}
    >
      {/* <div className="flex items-center px-2 sticky top-0 bg-white">
        <AiOutlineSearch size={18} className="text-gray-700" />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value.toLowerCase())}
          placeholder="Enter country name"
          className="placeholder:text-gray-700 p-2 outline-none"
        />
      </div> */}
      {display?.map((country) => (
        <li
          key={country?.id}
          className={`p-2 text-sm min-w-[300px] hover:bg-gray-100 hover:text-black
          ${
            country?.name?.toLowerCase() === selected?.toLowerCase() &&
            "bg-sky-600 text-white"
          }
          ${
            country?.name?.toLowerCase().startsWith(inputValue)
              ? "block"
              : "hidden"
          }`}
          onClick={() => {
            if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
              setSelected(country?.name);
              setOpen(false);
              setInputValue("");
              coin(country?.id,country?.name)
            }
            
          }}
        >
          {country?.name}
        </li>
      ))}
    </ul>
  </div>
  )
}
