import "swiper/css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Photo1 from "../assets/image/kegiatan/1.jpg";
import Photo2 from "../assets/image/kegiatan/2.jpg";

const Kegiatan = () => {
  return (
    <div className="primary-bg pt-20" id="kegiatan">
      <h2 className="heading-title text-center text-4xl sm:text-6xl">
        Kegiatan
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-5/6 flex justify-center mb-3 p-5">
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
              <div className="max-w-sm  rounded-lg">
                <img className="rounded-t-lg" src={Photo1} alt="" />
                <div className="py-2 flex justify-center">
                  <a href="https://drive.google.com/drive/folders/1RYniHhnCbyhq_3JjPdZqK4Sp3Kmbj-mS" target="blank" class="w-full text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 border-2 border-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
                    Sosialisasi Wayang Jemblung
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-sm  rounded-lg">
                <img className="rounded-t-lg" src={Photo2} alt="" />
                <div className="py-2 flex justify-center">
                  <a href="https://drive.google.com/drive/folders/1RYniHhnCbyhq_3JjPdZqK4Sp3Kmbj-mS" target="blank" class="w-full text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 border-2 border-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
                    Senam Sehat Warga Lirboyo
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-sm  rounded-lg">
                <img className="rounded-t-lg" src={Photo1} alt="" />
                <div className="py-2 flex justify-center">
                  <a href="https://drive.google.com/drive/folders/1RYniHhnCbyhq_3JjPdZqK4Sp3Kmbj-mS" target="blank" class="w-full text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 border-2 border-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
                    Pagelaran Wayang Jemblung
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Kegiatan;
