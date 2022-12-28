import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='bg-white w-2/5 p-6 border-r-2 rounded-tl-lg'>
      <div className=''>
        <h3 className='text-3xl font-bold my-4'>About</h3>
        <Link to='education'><h4 className='text-gray-700 font-semibold my-4 px-2 rounded-lg hover:bg-gray-200' >Education</h4></Link>
        <Link to="contact"><h4 className='text-gray-700 font-semibold my-4 px-2 rounded-lg hover:bg-gray-200' >Contact info</h4></Link>
      </div>
    </div>
  );
};

export default About;