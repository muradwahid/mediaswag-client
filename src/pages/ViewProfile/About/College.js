import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const College = () => {
  const {user}=useContext(AuthContext)
  return (
    <div className='py-4'>
      <h2 className='text-xl font-bold text-gray-700'>College</h2>
      <form>
        <input type="text" placeholder='College name' className='border-2 w-full py-3 px-3 rounded-md my-3'/>
        <div className='flex items-center'>
          <div className='border-2 rounded-xl'>
            <select className="select w-32 border">
              <option disabled selected>Year</option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
        </div>
          <p className='text-[18px] mx-2 font-bold'>To</p>
          <div className='border-2 rounded-xl'>
            <select className="select w-32">
              <option disabled selected>Year</option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
      </div>
        </div>
        <input type="text" placeholder='College name' className='border-2 w-full py-3 px-3 rounded-md my-3' />
        <div className='flex gap-3 items-center my-4'>
          <Link to={`/profile/${user?.email}/about/education`} className='bg-red-700 px-4 py-[2px] font-bold text-gray-100 rounded-2xl'>Cancel</Link>
          <input className='bg-emerald-700 px-4 py-[2px] font-bold text-gray-100 rounded-2xl' type="submit" value="Save"/>
        </div>
      </form>
    </div>
  );
};

export default College;