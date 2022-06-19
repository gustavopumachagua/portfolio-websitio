import React from 'react';

// testimonials data
import { testimonials } from '../data';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../swiper.css';

// import required modules
import { Autoplay, Pagination } from 'swiper';


const TestiSlider = () => {

  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 9500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
        {testimonials.map((item, index) => {
          const { authorImg, authorText, authorName, icon, href } = item;
          return (
            <SwiperSlide key={index}>
              <div
                className='flex flex-col lg:flex-row gap-12 lg:gap-32'
              >
                <div
                  className='w-48 h-48 lg:w-[328px] lg:h-[328px]'
                >
                  <img className='rounded-2xl' src={authorImg} alt='' />
                </div>
                <div
                  className='flex flex-col max-w-3xl'
                >
                  <h2 className='font-body text-2xl text-yellow-300 mb-8  font-normal'>
                    {authorText}
                  </h2>
                  <div className='mb-14'>
                    <p className='text-lg text-white'>{authorName}</p>
                  </div>
                  <ul className='flex space-x-6  '>
                  <li className='flex justify-center items-center  social'>
                  <a target="_blank" rel='noreferrer' className='text-base' href={href} >
              {icon}
            </a>
                  </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestiSlider;