import React from 'react';
import {NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div className='bg-white w-2/5 p-6 border-r-2 rounded-tl-lg'>
      <div className=''>
        <h3 className='text-3xl font-bold my-4'>About</h3>
        <NavLink to="education">
          {({ isActive }) => (
            <h4
              className={
                isActive ? "text-emerald-700 font-semibold my-4 px-2 rounded-lg bg-emerald-100 " : "text-gray-700 font-semibold my-4 px-2 rounded-lg"
              }
            >
              Education
            </h4>
          )}
        </NavLink>
        <NavLink to="contact">
          {({ isActive }) => (
            <h4
              className={
                isActive ? "text-emerald-700 font-semibold my-4 px-2 rounded-lg bg-emerald-100 " : "text-gray-700 font-semibold my-4 px-2 rounded-lg"
              }
            >
              Contact info
            </h4>
          )}
        </NavLink>
      </div>
      
    </div>
  );
};

export default About;