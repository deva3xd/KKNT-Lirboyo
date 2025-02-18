import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import Profil1 from "../assets/image/profil/profil.jpg";
import Female from "../assets/icon/famale.png";
import Populate from "../assets/icon/populate.png";
import Male from "../assets/icon/male.png";
import Hospital from "../assets/image/profil/hospital.png";
import Posyandu from "../assets/image/profil/posyandu.png";
import Puskesmas from "../assets/image/profil/puskesmas.png";

const Profil = () => {
  return (
    <div className="primary-bg pt-20" id="profil">
      <div className="text-center">
        <h2
          className="text-gray-800 banthern text-3xl sm:text-5xl"
          style={{ fontWeight: "500" }}
        >
          Profil
          <br />
          <span className="heading-title text-center text-4xl sm:text-6xl">
            Kelurahan Lirboyo
          </span>
        </h2>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center py-2 sm:py-5 px-5 sm:px-10">
        <div className="w-full sm:w-1/2">
          <p className="text-xs sm:text-lg text-center sm:text-start py-2">
            Kelurahan Lirboyo adalah salah satu kelurahan yang terletak di
            Kecamatan Mojoroto, Kota Kediri, Jawa Timur. Wilayah kelurahan ini
            mencakup area seluas 69,80 hektar, dengan 4 hektar berupa lahan
            persawahan, 34 hektar terdiri dari tanah kering, dan 31,80 hektar
            digunakan untuk fasilitas umum.
          </p>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-end mt-2 sm:mt-0">
          <img
            src={Profil1}
            alt=""
            className="w-3/4 rounded-lg border-4 border-white"
          />
        </div>
      </div>

      {/* jumlah penduduk */}
      <div className="secondary-bg  py-8">
        <h2
          className="text-gray-800 banthern text-3xl sm:text-5xl text-center mb-4"
          style={{ fontWeight: "500" }}
        >
          Jumlah Penduduk
        </h2>
        <div className="flex justify-center">
          <div className="w-2/6 flex justify-center">
            <div className="text-center font-bold">
              <div className="flex justify-center">
                <img src={Male} alt="male" className="w-3/4" />
              </div>
              <p className="text-xs sm:text-base">3.108 Pria</p>
            </div>
          </div>
          <div className="w-2/6 flex justify-center">
            <div className="text-center font-bold">
              <div className="flex justify-center">
                <img src={Populate} alt="populate" className="w-3/4" />
              </div>
              <p className="text-xs sm:text-base">6.002 Penduduk</p>
            </div>
          </div>
          <div className="w-2/6 flex justify-center">
            <div className="text-center font-bold">
              <div className="flex justify-center">
                <img src={Female} alt="female" className="w-3/4" />
              </div>
              <p className="text-xs sm:text-base">2.892 Wanita</p>
            </div>
          </div>
        </div>
      </div>
      <div className="secondary-bg text-center px-7 sm:px-14">
        <p className="text-xs sm:text-lg pb-2">
          Sebagian besar penduduk Kelurahan Lirboyo bermata pencaharian sebagai
          petani tebu, menjadikan tanaman tebu sebagai komoditas utama dalam
          sektor pertanian di wilayah ini1. Keberadaan perkebunan tebu tidak
          hanya menjadi sumber penghasilan bagi masyarakat, tetapi juga berperan
          penting dalam mendukung perekonomian lokal serta industri gula di
          sekitarnya.
        </p>
      </div>

      {/* fasilitas umum */}
      <div className="primary-bg">
        <h2
          className="text-gray-800 banthern text-3xl sm:text-5xl text-center py-8"
          style={{ fontWeight: "500" }}
        >
          Fasilitas Umum
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
                <div className="max-w-sm rounded-lg">
                  <img className="rounded-t-lg" src={Hospital} alt="" />
                  <div className="py-2 flex justify-center">
                    <p className="font-bold w-full text-lg px-5 py-2.5 text-center mb-7">
                      Rumah Sakit Umum Lirboyo
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-sm rounded-lg">
                  <img className="rounded-t-lg" src={Posyandu} alt="" />
                  <div className="py-2 flex justify-center">
                    <p className="font-bold w-full text-lg px-5 py-2.5 text-center mb-7">
                      Posyandu Lirboyo
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-sm rounded-lg">
                  <img className="rounded-t-lg" src={Puskesmas} alt="" />
                  <div className="py-2 flex justify-center">
                    <p className="font-bold w-full text-lg px-5 py-2.5 text-center mb-7">
                      Puskesmas Lirboyo
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
