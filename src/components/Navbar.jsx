import React from 'react';
import neftlix from "./img/neftlix.png";
import n from "./img/n.png";

import './Navbar.css';
import { IoLanguage } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className=" mx-auto px-4 ">
      <nav className='flex justify-between items-center'>
        <div className="image">
          <img src={neftlix} alt="Netflix Logo" className='hidden md:block w-[120px]' />
          <img src={n} alt="Netflix Logo" className='block md:hidden w-[20px]' />

        </div>
        <div className="right flex items-center gap-4">
          <div className="lang flex items-center">
            <IoLanguage style={{ color: '#fff' }} />
            <select className="lan text-white outline-none">
              <option className="text-black" value="">English</option>
              <option className="text-black"value="">Russian</option>
            </select>
          </div>

          {/* Sign In Button */}
          <div className="signin flex justify-center items-center">
            Sign in
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
