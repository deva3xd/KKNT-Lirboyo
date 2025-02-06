import React from 'react';
import Wayang from '../assets/image/wayang.png';

const Home = () => {
  return (
    <div className='home w-full flex justify-center items-center bg-black bg-opacity-50 relative'>
    <img src={Wayang} alt='wayang' className="object-cover w-full h-full" />
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-10 flex justify-center items-center">
      <div className='text-white'>
        <h4 className='italic text-4xl text-center'>Selamat Datang di Web Profile</h4>
        <h1 className='text-8xl'>WAYANG JEMBLUNG</h1>
      </div>
    </div>
  </div>
  )
}

export default Home;
