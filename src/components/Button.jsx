import React, { useState, useEffect } from 'react';
import Arrow from "../assets/icon/up-arrow.png";

const Button = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;

      if (position > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <a href="#beranda" className="fixed bottom-0 right-0 m-5 bg-custom-primary p-3 border border-white rounded-full hover:bg-orange-800 z-50">
        <img src={Arrow} alt="Arrow" />
      </a>
    )
  );
};

export default Button;