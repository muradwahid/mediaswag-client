import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Education = () => {
  const { user } = useContext(AuthContext)
  const [highschool, setHighSchool] = useState([])
  const [colleges, setCollege] = useState([]);
  useEffect(() => {
    fetch(`https://my-app-server-ten.vercel.app/college/${user?.email}`)
      .then(res => res.json())
      .then(data => {
      setCollege(data)
    })
  }, [user?.email])
  useEffect(() => {
    fetch(`http://localhost:5000/highschool/${user?.email}`)
    .then(res=>res.json())
      .then(data => {
      setHighSchool(data)
    })
  }, [user?.email])
  console.log(highschool);
  return (
    <div className='w-3/5 pt-6'>
      <div>
        <h3 className='text-2xl font-semibold text-gray-700'>College</h3>
        <Link to="education-add" className='flex gap-4 my-6 cursor-pointer items-center'>
          <i className="fa-solid fa-circle-plus text-[22px] text-emerald-600"></i>
          <p className='font-bold text-emerald-600'>Add college</p>
        </Link>

        {
          colleges.map(college => <div key={college._id} className='flex gap-4 items-center'>
            <i className="fa-solid fa-graduation-cap bg-slate-200 text-[22px] p-2 rounded-full text-emerald-600 "></i>
            <div className='bg-emerald-100 px-4 py-1 rounded-xl'>
              <p>Studies at <span className='font-semibold'>{college.collegeName}</span></p>
              <div className='mt-[-5px]'><small className='text-gray-500'>{college.start}</small> <small className='text-gray-500 mx-1'>to </small><small className='text-gray-500'>{college.end}</small></div>
              <p className='mt-[-4px] font-semibold capitalize text-gray-600'>{college.degree}</p>
            </div>
          </div>)
        }

        <h3 className='text-2xl font-semibold text-gray-700 mt-6'>High school</h3>
        <Link to="highschool-add" className='flex gap-4 my-6 cursor-pointer items-center'>
          <i className="fa-solid fa-circle-plus text-[22px] text-emerald-600"></i>
          <p className='font-bold text-emerald-600'>Add high school</p>
        </Link>

        {
          highschool.map(school => <div key={school._id} className='flex gap-4 items-center'>
            <i className="fa-solid fa-graduation-cap bg-slate-200 text-[22px] p-2 rounded-full text-emerald-600 "></i>
            <div className='bg-emerald-100 px-4 py-1 rounded-xl'>
              <p>Studied at <span className='font-semibold'>{school.highSchool}</span></p>
              <div className='mt-[-5px]'><small className='text-gray-500'>{school.start}</small> <small className='text-gray-500 mx-1'>to </small><small className='text-gray-500'>{school.end}</small></div>
              <p className='mt-[-4px] font-semibold capitalize text-gray-600'>{school.degree}</p>
            </div>
          </div>)
        }
      </div>
      <div></div>
    </div>
  );
};

export default Education;