import React from "react";
import Instagram from '../assets/icon/instagram.png';
import Tiktok from '../assets/icon/tiktok.png';
import Youtube from '../assets/icon/youtube.png';

const Footer = () => {
  return (
    <footer className="shadow-sm primary-bg">
      <div className="w-full mx-auto text-white">
        <div className="py-6 sm:mb-0 space-x-3 rtl:space-x-reverse text-center text-black">
          <h2 className="banthern text-2xl sm:text-5xl text-custom-primary font-bold">
            Wayang Jemblung Lirboyo
          </h2>
          <div className="text-sm sm:text-lg font-bold">
            <p>Cintai dan Lestarikan Budaya Lokal Indonesia</p>
          </div>
          <div className="text-xs sm:text-sm font-medium">
            <p>Sosial Media :</p>
            <div className="flex justify-center">
              <div className="mx-1 flex items-center gap-1">
                <img src={Instagram} alt="instagram" className="w-4" />
                <p>kknt08_lirboyo</p>
              </div>
              <div className="mx-1 flex items-center gap-1">
                <img src={Tiktok} alt="tiktok" className="w-5" />
                <p>kknt08_lirboyo</p>
              </div>
              <div className="mx-1 flex items-center gap-1">
                <img src={Youtube} alt="tiktok" className="w-5" />
                <p>proff Jim</p>
              </div>
            </div>
          </div>
        </div>
        <span
          className="block text-xs sm:text-sm sm:text-semibold bg-slate-900 py-3 bg-custom-gradient text-center"
          style={{ color: "#eebe88" }}
        >
          Copyright © 2025 KKN 08 Lirboyo
        </span>
      </div>
    </footer>
  );
};

export default Footer;
