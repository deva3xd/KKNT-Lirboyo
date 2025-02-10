import React from 'react';
import Arrow from "../assets/icon/up-arrow.png";

const Button = () => {
  return (
    <a href='#beranda' className="fixed bottom-0 right-0 m-5 bg-custom-primary p-4 border border-white rounded-full hover:bg-gray-500 z-50"><img src={Arrow} alt="Arrow" /></a>
  )
}

export default Button;