import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { IoIosArrowForward } from "react-icons/io";
import slider1 from './img/Neftlix.jpg';
import slider2 from './img/Fast-X.jpg';
import slider3 from './img/Game.jpg';

export const Carousel = () => {
  return (
    <div className="px-6 py-4">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        
        style={{ margin: '16px', borderRadius: '1rem', backgroundColor: 'rgba(0, 0, 0, 0.6)',  width: "100%",// полупрозрачный фон
          clipPath: 'path("M 0 0 Q 50 100 100 0 L 100 100 L 0 100 Z")' }}
      >
        {/* Static Slide 1 */}
        <SwiperSlide>
          <div
            className="relative h-[480px] flex items-center justify-start text-white "
            style={{
              backgroundImage: `url(${slider1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: "480px", width: "100%"
            }}
          >          <div className=' flex justify-center align-center flex-wrap gap-2.5 py-6 '>          
            <div className=" bg-opacity-50 p-8 rounded-xl  max-w-[80%]">
              <h3 className=" font-bold " style={{
                fontSize: ' 3rem',
                fontWeight: '900'
              }}>Unlimited movies, TV shows, and more</h3>
              <h4 style={{
                marginBottom: ' 1.5rem', fontSize: '1.25rem',
                fontWeight: '400'
              }}>Starts at EUR 7.99. Cancel anytime.</h4>
              <h5 style={{
                fontSize: '1rem',
                fontWeight: '400',
                lineHeight: '1.5'
              }}>Ready to watch? Enter your email to create or restart your membership.</h5>
    <div className='flex flex-row gap-2.5 p-6' style={{paddingTop:'1.5rem'}}>
                <input type="text" placeholder='Email address' className='text-xl   py-6 px-5 rounded-4xl bg-gray-700  h-14 w-80' />
                <button className='bg-red-700 rounded-4xl text-white h-14 w-56 text-xl  flex justify-center items-center flex-row'>Get Startted <IoIosArrowForward /></button>
             </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative h-[480px] flex items-center justify-start text-white "
            style={{
              backgroundImage: `url(${slider2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: "480px", width: "100%"
            }}
          >          <div className=' flex justify-center align-center flex-wrap gap-2.5 py-6 '>          
            <div className=" bg-opacity-50 p-8 rounded-xl  max-w-[80%]">
            <h3 className=" font-bold " style={{
                fontSize: ' 3rem',
                fontWeight: '900'
              }}>Fast-X</h3>
            <div className="flex flex-row">
              <p className="font-medium text-[14px] text-white" style={{ marginRight: "1rem" }} > 2025</p><span className="mx-1 text-[14px]" style={{ marginRight: "1rem" }}>·</span>
              <p className="font-medium text-[14px] text-white" style={{ marginRight: "1rem" }} >18+</p>
              <p className="font-medium text-[14px] text-white" style={{ marginRight: "1rem" }} >18+</p><span className="mx-1 text-[14px]" style={{ marginRight: "1rem" }}>·</span>
              <p className="font-medium text-[14px] text-white" style={{ marginRight: "1rem" }} >Thtillers</p><span className="mx-1 text-[14px]" style={{ marginRight: "1rem" }}>·</span>

                </div>
                <h4 className="text-lg mb-2" style={{      marginBottom: ' 1.5rem'}}>Twisted tales run wild in this mind-bending anthology series that reveals humanity's worst traits, greatest innovations and more.</h4>
              <h5 style={{
                fontSize: '1rem',
                fontWeight: '400',
                lineHeight: '1.5'
              }}>Ready to watch? Enter your email to create or restart your membership.</h5>
    <div className='flex flex-row gap-2.5 p-6' style={{paddingTop:'1.5rem'}}>
                <input type="text" placeholder='Email address' className='text-xl   py-6 px-5 rounded-4xl bg-gray-700  h-14 w-80' />
                <button className='bg-red-700 rounded-4xl text-white h-14 w-56 text-xl  flex justify-center items-center flex-row'>Get Startted <IoIosArrowForward /></button>
             </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative h-[480px] flex items-center justify-start text-white "
            style={{
              backgroundImage: `url(${slider3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: "480px", width: "100%"
            }}
          >          <div className=' flex justify-center align-center flex-wrap gap-2.5 py-6 '>          
            <div className=" bg-opacity-50 p-8 rounded-xl  max-w-[80%]">
            <h3 className=" font-bold " style={{
                fontSize: ' 3rem',
                fontWeight: '900'
              }}>Squid Game</h3>
            <div className="flex flex-row">
              <p className="font-medium text-[14px] text-white" style={{ marginRight: "1rem" }} > 2025</p><span className="mx-1 text-[14px]" style={{ marginRight: "1rem" }}>·</span>
              <p className="font-medium text-[14px] text-white" style={{ marginRight: "1rem" }} >18+</p>
              <p className="font-medium text-[14px] text-white" style={{ marginRight: "1rem" }} >18+</p><span className="mx-1 text-[14px]" style={{ marginRight: "1rem" }}>·</span>
              <p className="font-medium text-[14px] text-white" style={{ marginRight: "1rem" }} >Thtillers</p><span className="mx-1 text-[14px]" style={{ marginRight: "1rem" }}>·</span>

                </div>
                <h4 className="text-lg mb-2" style={{      marginBottom: ' 1.5rem'}}>Twisted tales run wild in this mind-bending anthology series that reveals humanity's worst traits, greatest innovations and more.</h4>
              <h5 style={{
                fontSize: '1rem',
                fontWeight: '400',
                lineHeight: '1.5'
              }}>Ready to watch? Enter your email to create or restart your membership.</h5>
    <div className='flex flex-row gap-2.5 p-6' style={{paddingTop:'1.5rem'}}>
                <input type="text" placeholder='Email address' className='text-xl   py-6 px-5 rounded-4xl bg-gray-700  h-14 w-80' />
                <button className='bg-red-700 rounded-4xl text-white h-14 w-56 text-xl  flex justify-center items-center flex-row'>Get Startted <IoIosArrowForward /></button>
             </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};
