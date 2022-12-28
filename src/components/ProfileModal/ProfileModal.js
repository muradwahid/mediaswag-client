import React from 'react';

const ProfileModal = (user,profileModal) => {

  return (
    <>
      {
        profileModal ? <div className='w-[300px] h-[300px] absolute'>
          <h1>murad</h1>
        </div>:null
      }
    </>
  );
};

export default ProfileModal;