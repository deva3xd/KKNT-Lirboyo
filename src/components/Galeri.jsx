import 'swiper/css';
import React from 'react';
import Photo1 from '../assets/image/photo1.jpg';
import Photo2 from '../assets/image/photo2.jpg';
import Photo3 from '../assets/image/photo3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';

const Galeri = () => {
  return (
    <div className='bg-white mt-3' id="galeri">
      <h2 className='heading-title text-center'>GALERI</h2>
      <div className='flex flex-col md:flex-row justify-center items-center'>
        <div className='w-full md:w-5/6 flex justify-center mb-3'>
          <Swiper
            spaceBetween={50}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3, 
              },
            }}
          >
            <SwiperSlide>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#home">
                  <img className="rounded-t-lg" src={Photo1} alt="" />
                </a>
                <div className="p-5">
                  <a href="#home">
                    <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Photo 1</h5>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#home">
                  <img className="rounded-t-lg" src={Photo2} alt="" />
                </a>
                <div className="p-5">
                  <a href="#home">
                    <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Photo 2</h5>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#home">
                  <img className="rounded-t-lg" src={Photo3} alt="" />
                </a>
                <div className="p-5">
                  <a href="#home">
                    <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Photo 3</h5>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#home">
                  <img className="rounded-t-lg" src={Photo3} alt="" />
                </a>
                <div className="p-5">
                  <a href="#home">
                    <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Photo 3</h5>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#home">
                  <img className="rounded-t-lg" src={Photo3} alt="" />
                </a>
                <div className="p-5">
                  <a href="#home">
                    <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Photo 3</h5>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Galeri;