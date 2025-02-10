import React from "react";

const Footer = () => {
  return (
    <footer className="shadow-sm primary-bg">
      <div className="w-full max-w-screen-xl mx-auto text-white">
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
              <p>Instagram</p>
              <p>Tiktok</p>
            </div>
          </div>
        </div>
        <span
          className="block text-xs sm:text-sm sm:text-semibold bg-slate-900 py-3 bg-custom-gradient text-center"
          style={{ color: "#eebe88" }}
        >
          Copyright by KKN 08 Lirboyo 2025
        </span>
      </div>
    </footer>
  );
};

export default Footer;
