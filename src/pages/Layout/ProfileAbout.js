import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import About from '../ViewProfile/About/About';

const ProfileAbout = () => {
  return (
    <div className='flex w-4/5 mx-auto mt-6 gap-6 bg-white rounded-lg'>
      <About></About>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default ProfileAbout;