import React from 'react';
import Kelompok from '../assets/icon/kelompok8.png';

const Profile = () => {
  return (
    <div className='w-full mt-3' id="profile">
        <h2 className='heading-title text-center'>PROFILE</h2>
        <div className='flex justify-center items-center my-5 gap-36'>
          <img src={Kelompok} alt='Lirboyo' className='w-60' />
          <img src={Kelompok} alt='Lirboyo' className='w-60' />
          <img src={Kelompok} alt='Lirboyo' className='w-60' />
        </div>
        <div className='bg-custom-primary h-96'>

        </div>
    </div>
  )
}

export default Profile;
