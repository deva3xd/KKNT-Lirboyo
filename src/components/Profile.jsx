import React from 'react';
import Kelompok from '../assets/icon/kelompok8.png';
import Mbahji from '../assets/image/mbahji.png';

const Profile = () => {
  return (
    <div className='w-full mt-3' id="profile">
      <h2 className='heading-title text-center'>PROFIL</h2>
      <div className='flex flex-col justify-center items-center my-5 gap-5 md:gap-36 sm:flex-row'>
        <div className='my-2'>
          <img src={Kelompok} alt='Lirboyo' className='w-40 sm:w-56' />
          <p className='text-center font-medium mt-2'>A</p>
        </div>
        <div className='my-2'>
          <img src={Kelompok} alt='Lirboyo' className='w-40 sm:w-56' />
          <p className='text-center font-medium mt-2'>Kelompok 8</p>
        </div>
        <div className='my-2'>
          <img src={Kelompok} alt='Lirboyo' className='w-40 sm:w-56' />
          <p className='text-center font-medium mt-2'>A</p>
        </div>
      </div>
      <div className='bg-custom-primary flex flex-col-reverse sm:flex-row justify-center py-10 px-4 sm:px-28'>
        <div className='w-full sm:w-1/2 flex items-center justify-center'>
          <div className='w-full h-72 bg-custom-secondary p-5'>
            <p className='text-white'>
              Wayang Jemblung merupakan salah satu seni tradisional dari Jawa Timur, khususnya di wilayah Kediri dan sekitarnya. Seni ini adalah bentuk teater tradisional yang menggabungkan cerita pewayangan dengan unsur-unsur musik, dialog, dan tembang Jawa.
            </p>
          </div>
        </div>
        <div className='w-full sm:w-1/2 flex items-center'>
          <img src={Mbahji} alt='Mbahji' style={ {width: '500px'} } />
        </div>
      </div>
    </div>
  )
}

export default Profile;
