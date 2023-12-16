import React, { useState } from 'react'
import image2 from "../images/person.png";
import logo from "../images/GB.png";
import { GiHamburgerMenu } from "react-icons/gi";


const Navdash = () => {

  const[toggle,settoggle]=useState(false)

  const toggleMenu=()=>{
    settoggle(!toggle)
  }

  return (
    <div className="flex bg-blue-600 justify-between items-center px-[5%] py-4 min-w-full">
        <div className="block cursor-pointer xl:hidden ">
          <GiHamburgerMenu className="scale-125" onClick={toggleMenu} color='white'/>
        </div>

        <div className="text-white space-x-3 hidden xl:flex">
          <div className="flex">
            <div className="bg-gray-300 rounded-full w-12 h-12">
              <img
                src={image2} // Replace with your image URL
                alt="profile"
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div className="bg-green-500 w-2 h-2 rounded-full -ml-1.5 mt-8"></div>
          </div>

          <div className="flex-1">
            <p>John Andre</p>
            <span className="text-sm font-sans">Starfjord AS</span>
          </div>
        </div>
        
        <div className="flex items-center text-white space-x-2">
          <p>Norsk Bokmal</p>
          <img src={logo} alt="flag" className="w-6 h-6" />
        </div>
      </div>
  )
}

export default Navdash