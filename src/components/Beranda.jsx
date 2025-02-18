import React from 'react';
import Profil from '../assets/image/profil.png';

const Beranda = () => {
  return (
    <div className='beranda bg-black bg-opacity-50 relative' id='beranda'>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-55 z-10 flex flex-col sm:flex-row justify-center items-center px-5">
        <div className='w-full sm:w-1/2 flex justify-center pt-12 sm:pt-0'>
          <img src={Profil} alt='profil' className='w-8/12' />
        </div>
        <div className='w-full sm:w-1/2 font-extrabold text-center sm:text-end'>
          <h1 className='banthern text-2xl lg:text-4xl text-white'>Budaya Kesenian<br /><span className='banthern text-4xl lg:text-6xl underline'>Wayang Jemblung</span></h1>
          <p className='text-sm lg:text-lg text-white'>Salah satu kesenian tradisional <br /> Jawa Timur terkhusus wilayah Kediri<br />dan sekitarnya.</p>
        </div>
      </div>
    </div>
  )
}

export default Beranda;
 