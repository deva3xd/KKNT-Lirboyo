import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import Photo1 from "../assets/image/kegiatan/1.jpg";
import Photo2 from "../assets/image/kegiatan/2.jpg";
import Photo3 from "../assets/image/kegiatan/3.png";

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
            pagination={{
              clickable: true,
            }}
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
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div className="max-w-sm  rounded-lg">
                <img className="rounded-t-lg h-52" src={Photo1} alt="" />
                <div className="py-2 flex justify-center">
                  <a
                    href="https://drive.google.com/drive/folders/1SdwF89J1AcEg5PE_bP8kjQRCGO4elTqv?usp=drive_link"
                    target="blank"
                    class="w-full text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 border-2 border-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-7"
                  >
                    Sosialisasi Wayang Jemblung
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-sm  rounded-lg">
                <img className="rounded-t-lg h-52" src={Photo2} alt="" />
                <div className="py-2 flex justify-center">
                  <a
                    href="https://drive.google.com/drive/folders/1Spa4Ur11ohJBCAdXSHtMiJXj-QpfQR1g?usp=drive_link"
                    target="blank"
                    class="w-full text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 border-2 border-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-7"
                  >
                    Senam Sehat Warga Lirboyo
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-sm  rounded-lg">
                <img className="rounded-t-lg h-52" src={Photo3} alt="" />
                <div className="py-2 flex justify-center">
                  <a
                    href="#beranda"
                    // target="blank"
                    class="w-full text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 border-2 border-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-7"
                  >
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
