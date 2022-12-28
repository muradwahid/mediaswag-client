import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const DisplayPost = () => {
  const {user}=useContext(AuthContext)
  return (
    <div className='w-3/5 mx-auto bg-white rounded-3xl my-6 px-4 py-5'>
      <div className='flex items-center gap-3'>
        <div className='w-12 border-2 border-emerald-600 rounded-full p-[2px]'>
          <img src={user?.photoURL} className="rounded-full" alt="" />
        </div>
        <div className='my-5'>
          {
            user?.displayName ? <p className='font-semibold text-emerald-800'>{user?.displayName}</p>:null
          }
        </div>
      </div>
      <div>
        <p className='text-gray-600 mb-3 mt-2'>Yesterday with @Karen Miller and @Marvin Stemperd at the #Rock'n'Rolla concert in LA. Was totally fantastic! People were really excited about this one!</p>
        <div className='rounded-2xl h-[400px] w-full'>
          <img className='rounded-2xl h-full w-full' src={`https://friendkit.cssninja.io/assets/img/demo/unsplash/1.jpg`} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DisplayPost;