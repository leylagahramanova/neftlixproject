import React from 'react'
import { IoLanguage } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
const Footer = () => {
  return (
      <div style={{margin:'32px'}}>
        <div className=" flex justify-center items-center flex-col gap-2.5 " >
          <p className=' text-xl font-normal text-center text-white py-2.5'>Ready to watch? Enter your email to create or restart your membership. <br /></p>
          <div className=' flex justify-center align-center flex-wrap gap-2.5 py-6 '>
          <input type="text" placeholder='Email address' className='text-xl   py-6 px-5 rounded-4xl bg-gray-700  h-14 w-80' />
          <button className='bg-red-700 rounded-4xl text-white h-14 w-56 text-xl  flex justify-center items-center flex-row'>Get Startted <IoIosArrowForward /></button>
          </div>
        </div>
        <div className="top-text footer">
          <a href="#">Questions? Contact us.</a>
        </div>
        <div id="all-footer">
          <div className="footer">
            <a href="#" >FAQ</a>
            <a href="#">Investor Relations</a>
            <a href="#">Privacy</a>
            <a href="#">Speed Test</a>
          </div>
          <div className="footer">
            <a href="#">Help Center</a>
            <a href="#">Jobs</a>
            <a href="#"> Cookie Preferences</a>
            <a href="#">Legal Notices</a>
          </div>
          <div className="footer">
            <a href="#">Account</a>
            <a href="#">Ways to Watch</a>
            <a href="#">Corporate Information</a>
            <a href="#"> Only on Netflix</a>
          </div>
          <div className="footer">
            <a href="#">Media Center</a>
            <a href="#">Terms of Use</a>
            <a href="#">
              Contact Us</a>
          </div>

        </div>
        <div className="lang flex items-center"style={{marginTop:'36px'}}>
          <IoLanguage style={{ color: '#fff' }} />
          <select className="lan text-white outline-none">
            <option className="text-black" value="">English</option>
            <option className="text-black" value="">Russian</option>
          </select>
        </div>
        <div className="top-text footer">
          <p>Netflix Azerbaijans.</p>
        </div>
      </div>
  )
}

export default Footer
