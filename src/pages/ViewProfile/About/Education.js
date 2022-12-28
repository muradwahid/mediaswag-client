import React from 'react';

const Education = () => {
  return (
    <div className='w-3/5 pt-6'>
      <div>
        <h3 className='text-2xl font-semibold text-gray-700'>College</h3>
        <div className='flex gap-4 my-6 cursor-pointer items-center'>
          <i className="fa-solid fa-circle-plus text-[22px] text-emerald-600"></i>
          <p className='font-bold text-emerald-600'>Add college</p>
        </div>

        <div className='flex gap-4 items-center'>
          <i className="fa-solid fa-graduation-cap bg-slate-200 text-[22px] p-2 rounded-full text-emerald-600 "></i>
          <div>
            <p>Hon's final year at <span className='font-semibold'>National University</span></p>
            <small className='text-gray-500'>Januray 19,2017- Present</small>
          </div>
        </div>

        <h3 className='text-2xl font-semibold text-gray-700 mt-6'>High school</h3>
        <div className='flex gap-4 my-6 cursor-pointer items-center'>
          <i className="fa-solid fa-circle-plus text-[22px] text-emerald-600"></i>
          <p className='font-bold text-emerald-600'>Add high school</p>
        </div>

        <div className='flex gap-4 items-center'>
          <i className="fa-solid fa-graduation-cap bg-slate-200 text-[22px] p-2 rounded-full text-emerald-600 "></i>
          <div>
            <p>Hon's final year at <span className='font-semibold'>National University</span></p>
            <small className='text-gray-500'>Januray 19,2017- Present</small>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Education;