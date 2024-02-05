import React from "react";
import { useState } from "react";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { FaAsterisk } from "@react-icons/all-files/fa/FaAsterisk";

function Navbar() {
  const [toggle,setToggle] = useState(false);

  return (
    <div>
      <div className="bg-slate-400 p-5">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-medium">
            w3<span className="text-green-600">schools</span>
          </h1>

         {toggle ? <FaAsterisk className="menu sm:hidden block"
          onClick={() => setToggle(!toggle)}/> :
          <FaBars className="menu sm:hidden block" 
          onClick={() => setToggle(!toggle)}/>
          }
         

          <ul className="sm:flex lg:gap-20 md:gap-10 sm:gap-5 hidden mx-10 text-xl">
            <li className="nav">Home</li>
            <li className="nav">About</li>
            <li className="nav">Project</li>
            <li className="nav">Page</li>
            <li className="nav">Contact</li>
          </ul>

          {/* ..........responsive copy........... */}
        <ul className={`duration-500 sm:hidden text-xl fixed top-[77px] bg-black text-white w-full text-center border-4
       ${toggle ? ' right-[0%]' : ' right-[-100%]'} `}>
            <li className="s-nav">Home</li>
            <li className="s-nav">About</li>
            <li className="s-nav">Project</li>
            <li className="s-nav">Page</li>
            <li className="s-nav">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
