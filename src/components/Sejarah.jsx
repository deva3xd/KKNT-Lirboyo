import "swiper/css";
import React from "react";
import Gambar1 from "../assets/image/1.png";
import Gambar2 from "../assets/image/2.png";
import Gambar3 from "../assets/image/3.png";

const Sejarah = () => {
  return (
    <div className="secondary-bg pt-20" id="sejarah">
      <div className="text-center">
        <h2
          className="text-gray-800 banthern text-3xl sm:text-5xl"
          style={{ fontWeight: "500" }}
        >
          Sejarah
          <br />
          <span className="heading-title text-center text-4xl sm:text-6xl">
            Wayang Jemblung
          </span>
        </h2>
        <div className="mt-5 px-5 flex flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2">
            <p className="text-center sm:text-start px-6 text-sm sm:text-lg">
              Wayang jemblung adalah seni teater tradisional dari Jawa Timur,
              khususnya Kediri dan sekitarnya, yang menggabungkan cerita
              pewayangan dengan musik, dialog, dan tembang Jawa. Berbeda dari
              Wayang Kuli, pertunjukan ini menampilkan dialog dan pemain secara
              langsung tanpa menggunakan wayang, dengan tata panggung minimalis
              dan kostum sederhana.
            </p>
          </div>
          <div className="flex justify-center w-full sm:w-1/2">
            <img src={Gambar1} alt="Gambar 1" className="w-5/6" />
          </div>
        </div>
        <div className="mt-5 px-5 flex flex-col sm:flex-row">
          <div className="flex justify-center w-full sm:w-1/2">
            <img src={Gambar2} alt="Gambar 2" className="w-5/6" />
          </div>
          <div className="w-full sm:w-1/2">
            <p className="text-center sm:text-start px-6 text-sm sm:text-lg">
              Pertunjukan wayang jemblung menekankan aspek lisan, dengan iringan
              musik yang dibawakan secara vokal. Awalnya, kesenian in digunakan
              dalam ritual selamatkan bayi, tetapi kemudian berkembang menjadi
              media dakwah Islam, dengan cerita yang mengangkat kisah-kisah
              seperti Babad, Menak, serta sejarah perjuangan tokoh Islam seperti
              Sunan Kalijaga dan Diponegoro.
            </p>
          </div>
        </div>
        <div className="mt-5 px-5 flex flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2">
            <p className="text-center sm:text-start px-6 text-sm sm:text-lg">
              Dalam perkembangannya, wayang jemblung mengalami berbagai
              modifikasi, seperti penggunaan gamelan di Blitar dan penggabungan
              dengan seni reog di Ponorogo untuk menarik minat masyarakat. Seni
              ini juga dimanfaatkan untuk penyuluhan dan hiburan dalam acara
              hajatan. Meskipun mengalami perubahan, wayang jemblung tetap
              mempertahankan nilai moral dan budaya yang diwariskannya. Di
              Kediri, kesenian ini masih dilestarikan sebagai bagian dari
              tradisi lokal.
            </p>
          </div>
          <div className="flex justify-center w-full sm:w-1/2">
            <img src={Gambar3} alt="Gambar 3" className="w-5/6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sejarah;
