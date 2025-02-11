import 'swiper/css';
import React, { useState } from 'react';
import Gambar1 from '../assets/image/galeri/1.jpg';
import Gambar2 from '../assets/image/galeri/2.jpg';
import Gambar3 from '../assets/image/galeri/3.jpg';
import Gambar4 from '../assets/image/galeri/4.jpg';
import Gambar5 from '../assets/image/galeri/5.jpg';
import Gambar6 from '../assets/image/galeri/6.jpg';

const Galeri = () => {
  const [showMore, setShowMore] = useState(false); 

  const cards = [
    { id: 1, imageSrc: Gambar1 },
    { id: 2, imageSrc: Gambar2 },
    { id: 3, imageSrc: Gambar3 },
    { id: 4, imageSrc: Gambar4 },
    { id: 5, imageSrc: Gambar5 },
    { id: 6, imageSrc: Gambar6 },
  ];

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="secondary-bg pt-20" id="galeri">
      <h2 className="heading-title text-center text-4xl sm:text-6xl">Galeri</h2>
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <div className="w-full sm:w-5/6 flex justify-center p-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {cards.slice(0, showMore ? cards.length : 3).map((card) => (
              <div key={card.id}>
                <img className="rounded-lg w-full h-auto" src={card.imageSrc} alt={`Gambar ${card.id}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-5">
        <button
          onClick={handleShowMore}
          className="w-full sm:w-2/12 text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 border-2 border-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mb-2"
        >
          {showMore ? "Lebih Sedikit" : "Lebih Banyak"}
        </button>
      </div>
    </div>
  );
}

export default Galeri;