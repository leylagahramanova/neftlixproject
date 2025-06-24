import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

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
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="relative flex items-center justify-start text-white"
            style={{
              backgroundImage: `url(${slider1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: "550px",
              width: "100%",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
            }}
          >
            <div
              className="py-6"
              style={{
                maxWidth: "720px",
                width: "100%",
              }}
            >
              <h3
                className="font-bold"
                style={{
                  fontSize: '3rem',
                  fontWeight: '900',
                }}
              >
                Unlimited movies, TV shows, and more
              </h3>
              <h4
                style={{
                  marginBottom: '1.5rem',
                  fontSize: '1.25rem',
                  fontWeight: '400',
                }}
              >
                Starts at EUR 7.99. Cancel anytime.
              </h4>
              <h5
                style={{
                  fontSize: '1rem',
                  fontWeight: '400',
                  lineHeight: '1.5',
                }}
              >
                Ready to watch? Enter your email to create or restart your membership.
              </h5>
              <div
                className='flex flex-row gap-2.5 pt-6'
                style={{ maxWidth: '100%' }}
              >
                <input
                  type="text"
                  placeholder='Email address'
                  className='text-xl py-6 px-5 rounded-4xl bg-gray-700 h-14 w-full max-w-[320px] text-white'
                />
                <button
                  className='bg-red-700 rounded-4xl text-white h-14 w-full max-w-[224px] text-xl flex justify-center items-center flex-row'
                  style={{ minWidth: '140px' }}
                >
                  Get Started <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="relative flex items-center justify-start text-white"
            style={{
              backgroundImage: `url(${slider2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: "480px",
              width: "100%",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
            }}
          >
            <div
              className="py-6"
              style={{
                maxWidth: "720px",
                width: "100%",
              }}
            >
              <h3
                className="font-bold"
                style={{
                  fontSize: '3rem',
                  fontWeight: '900',
                }}
              >
                Fast-X
              </h3>
              <div className="flex flex-row mb-2" style={{ flexWrap: 'wrap' }}>
                <p className="font-medium text-[14px] text-white mr-4">2025</p>
                <span className="mx-1 text-[14px] mr-4">·</span>
                <p className="font-medium text-[14px] text-white mr-4">18+</p>
                <span className="mx-1 text-[14px] mr-4">·</span>
                <p className="font-medium text-[14px] text-white mr-4">Thrillers</p>
              </div>
              <h4
                className="text-lg mb-2"
                style={{ marginBottom: '1.5rem' }}
              >
                Twisted tales run wild in this mind-bending anthology series that reveals humanity's worst traits, greatest innovations and more.
              </h4>
              <h5
                style={{
                  fontSize: '1rem',
                  fontWeight: '400',
                  lineHeight: '1.5',
                }}
              >
                Ready to watch? Enter your email to create or restart your membership.
              </h5>
              <div
                className='flex flex-row gap-2.5 pt-6'
                style={{ maxWidth: '100%' }}
              >
                <input
                  type="text"
                  placeholder='Email address'
                  className='text-xl py-6 px-5 rounded-4xl bg-gray-700 h-14 w-full max-w-[320px] text-white'
                />
                <button
                  className='bg-red-700 rounded-4xl text-white h-14 w-full max-w-[224px] text-xl flex justify-center items-center flex-row'
                  style={{ minWidth: '140px' }}
                >
                  Get Started <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="relative flex items-center justify-start text-white"
            style={{
              backgroundImage: `url(${slider3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: "480px",
              width: "100%",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
            }}
          >
            <div
              className="py-6"
              style={{
                maxWidth: "720px",
                width: "100%",
              }}
            >
              <h3
                className="font-bold"
                style={{
                  fontSize: '3rem',
                  fontWeight: '900',
                }}
              >
                Squid Game
              </h3>
              <div className="flex flex-row mb-2" style={{ flexWrap: 'wrap' }}>
                <p className="font-medium text-[14px] text-white mr-4">2025</p>
                <span className="mx-1 text-[14px] mr-4">·</span>
                <p className="font-medium text-[14px] text-white mr-4">18+</p>
                <span className="mx-1 text-[14px] mr-4">·</span>
                <p className="font-medium text-[14px] text-white mr-4">Thrillers</p>
              </div>
              <h4
                className="text-lg mb-2"
                style={{ marginBottom: '1.5rem' }}
              >
                Twisted tales run wild in this mind-bending anthology series that reveals humanity's worst traits, greatest innovations and more.
              </h4>
              <h5
                style={{
                  fontSize: '1rem',
                  fontWeight: '400',
                  lineHeight: '1.5',
                }}
              >
                Ready to watch? Enter your email to create or restart your membership.
              </h5>
              <div
                className='flex flex-row gap-2.5 pt-6'
                style={{ maxWidth: '100%' }}
              >
                <input
                  type="text"
                  placeholder='Email address'
                  className='text-xl py-6 px-5 rounded-4xl bg-gray-700 h-14 w-full max-w-[320px] text-white'
                />
                <button
                  className='bg-red-700 rounded-4xl text-white h-14 w-full max-w-[224px] text-xl flex justify-center items-center flex-row'
                  style={{ minWidth: '140px' }}
                >
                  Get Started <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};
