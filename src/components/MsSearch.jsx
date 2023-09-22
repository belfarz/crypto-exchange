import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
// import { AiOutlineSearch } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri"
export default function MsSearch() {

    const [countries, setCountries] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);
  
    useEffect(() => {
      fetch("https://restcountries.com/v2/all?fields=name")
        .then((res) => res.json())
        .then((data) => {
          setCountries(data);
        });
    }, []);

  return (
    <div className=" w-150 font-medium h-80">
    <div
      onClick={() => {
        setOpen(!open)
        document.querySelector("#searchParam").click()
      }}
      className={`bg-black w-full p-2 flex items-center justify-between rounded-full ${
        !selected && "text-gray-700"
      }`}
    >
       <div className="flex items-center">
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
      <BiChevronDown size={25} className={` text-white border-l border-white ${open && "rotate-180 "}`} />
      </div>
    </div>
    <ul
      className={`bg-black text-white mt-2 overflow-y-auto ${
        open ? "max-h-60" : "max-h-0"
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
      {countries?.map((country) => (
        <li
          key={country?.name}
          className={`p-2 text-sm hover:bg-gray-100 hover:text-black
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
