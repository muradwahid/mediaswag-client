import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const College = () => {
  const { user } = useContext(AuthContext);
  const handleEducationCollege = (e) => {
    e.preventDefault();
    const form = e.target;
    const collegeName = form.collegeName.value;
    const start = form.start.value;
    const end = form.end.value;
    const degree = form.degree.value;
    const collegeData = {
      collegeName,
      start,
      end,
      degree,
      email:user?.email
    }
    fetch('https://my-app-server-ten.vercel.app/college', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(collegeData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          form.reset();
      }
    })
  }
  return (
    <div className='py-4'>
      <h2 className='text-xl font-bold text-gray-700'>College</h2>
      <form onSubmit={handleEducationCollege}>
        <input name='collegeName' type="text" placeholder='College name' className='border-2 w-full py-3 px-3 rounded-md my-3'/>
        <div className='flex items-center'>
          <div className='border-2 rounded-xl'>
            <select name='start' className="select w-32 border">
              <option disabled selected>Year</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
              <option>2019</option>
              <option>2018</option>
              <option>2017</option>
              <option>2016</option>
              <option>2015</option>
              <option>2014</option>
            </select>
        </div>
          <p className='text-[18px] mx-2 font-bold'>To</p>
          <div className='border-2 rounded-xl'>
            <select name='end' className="select w-32">
              <option disabled selected>Year</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
              <option>2019</option>
              <option>2018</option>
              <option>2017</option>
              <option>2016</option>
              <option>2015</option>
              <option>2014</option>
            </select>
      </div>
        </div>
        <input name='degree' type="text" placeholder='Degree' className='border-2 w-full py-3 px-3 rounded-md my-3' />
        <div className='flex gap-3 items-center my-4'>
          <Link to={`/profile/${user?.email}/about/education`} className='bg-red-700 px-4 py-[2px] font-bold text-gray-100 rounded-2xl'>Cancel</Link>
          <input className='bg-emerald-700 px-4 py-[2px] font-bold text-gray-100 rounded-2xl' type="submit" value="Save"/>
        </div>
      </form>
    </div>
  );
};

export default College;