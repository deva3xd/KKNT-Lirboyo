import React from 'react';
import Profil from '../assets/image/profil.png';

const Beranda = () => {
  return (
    <div className='beranda bg-black bg-opacity-50 relative' id='beranda'>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-10 flex flex-col sm:flex-row justify-center items-center px-5">
        <div className='w-full sm:w-1/2 flex justify-center pt-12 sm:pt-0'>
          <img src={Profil} alt='profil' className='sm:w-10/12' />
        </div>
        <div className='w-full sm:w-1/2 font-bold text-center sm:text-end'>
          <h1 className='banthern text-3xl sm:text-5xl stroke-2' style={{ color: '#933e01' }}>Budaya Kesenian<br /><span className='banthern text-5xl sm:text-7xl'>Wayang Jemblung</span></h1>
          <p className='text-lg sm:text-2xl font-extrabold text-black stroke-1'>Salah satu kesenian tradisional <br /> Jawa Timur terkhusus wilayah Kediri dan sekitarnya.</p>
        </div>
      </div>
    </div>
  )
}

export default Beranda;
 