import React from 'react';
const DisplayComment = ({ user, comment: commnetShow, id }) => {
  const { comment, commentId, commentImg, commentName } = commnetShow;
  return (
    <>
      {
        commentId === id ? <div className='flex gap-4 my-6'>
          <div>
            <img className='w-9 rounded-full' src={commentImg} alt="" />
          </div>
          <div className='bg-gray-100 px-4 py-1 rounded-3xl'>
            <p className='font-semibold text-emerald-800'>{commentName}</p>
            <p className='text-gray-600'>{comment}</p>
          </div>
        </div>: null
      }
    </>
  );
};

export default DisplayComment;