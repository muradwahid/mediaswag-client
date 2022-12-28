import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const ViewProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className='mt-16 pb-12 w-4/5 mx-auto'>
        <div className=' flex justify-center'>
          <div className='flex items-center gap-5 text-emerald-600'>
            <div className='w-36 h-36 rounded-full border'>
              <img className='rounded-full w-full h-full' src={user?.photoURL} alt="" />
            </div>
            <div>
              <h2 className='text-4xl font-semibold'>{user?.displayName}</h2>
              <small className='font-semibold'>0 friend, 0 follower.</small>
            </div>
          </div>
        </div>
      </div>
      <div className='border-t-2 border-b-2 py-2 bg-white '>
        <div className='text-[20px] font-semibold flex gap-6 w-4/5 mx-auto text-gray-700'>
          <Link>Posts</Link>
          <Link to={`about`}>About</Link>
        </div>
      </div>
    </>
  );
};

export default ViewProfile;