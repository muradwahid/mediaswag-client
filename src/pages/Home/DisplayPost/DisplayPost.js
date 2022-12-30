import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import DisplayComment from '../DisplayComment/DisplayComment';
import '../DisplayPost/DisplayPost.css'
const DisplayPost = ({ user, post }) => {
  const { _id, text, email, image, profilePhoto, userName, date } = post;
  const [handleReact, setHandleReact] = useState(false);
  const [reload, setReload] = useState();
  const [lengthComment,setLengthComment]=useState([])
  const { data: comments = [], refetch } = useQuery({
    queryKey: [`comment`],
    queryFn: async () => {
      const res = await fetch(`https://my-app-server-ten.vercel.app/comment`);
      const data = await res.json();
      return data
    }
  })
  useEffect(() => {
    fetch(`https://my-app-server-ten.vercel.app/comment/${_id}`)
      .then(res => res.json())
      .then(data => {
        setLengthComment(data);
        
    })
  }, [_id, reload]) 
  const handleComment = (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;
    const commentData = {
      comment,
      commentId: _id,
      commentImg: user?.photoURL,
      commentName:user?.displayName
    }
    fetch('https://my-app-server-ten.vercel.app/comment', {
      method: "POST",
      headers: {
        "content-type":"application/json"
      },
      body:JSON.stringify(commentData)
    })
    .then(res=>res.json())
      .then(data => {
        if (data.acknowledged) {
          form.reset();
          refetch();
          setReload(refetch)
        }
    })
    
  }
  const handdleLike = () => {
    setHandleReact(!handleReact)
  }
  const handleClickReact = (e) => {
    
  }
  return (
    <div className='w-3/5 mx-auto bg-white rounded-3xl my-6 px-4 py-5'>
      <div className='flex items-center gap-3'>
        <div className='w-12 border-2 border-emerald-600 rounded-full p-[2px]'>
          <img src={profilePhoto} className="rounded-full" alt="" />
        </div>
        <div className='my-5'>
          
          <p className='font-semibold text-emerald-800'>{userName}</p>
          <small className='text-gray-600'>{date}</small>
          
        </div>
      </div>
      <div>
        <p className='text-gray-600 mb-3 mt-2'>{text}</p>
        <div className='rounded-2xl h-[400px] w-full'>
          <img className='rounded-2xl h-full w-full' src={image} alt="" />
        </div>
      </div>
      <div className='flex justify-between w-4/5 mx-auto'>
        <p className='flex gap-4'><i className='fa-solid fa-thumbs-up text-emerald-700 bg-gray-200 p-1 rounded-full'></i> <span>0</span></p>
        <div>{
          lengthComment.length
        } comments
        </div>
      </div>
      <div className='flex items-center justify-evenly mt-2 border-t-2 border-b-2 py-2'>
        <div className='relative'>
          <div onClick={handleClickReact} className={`${handleReact ? "block" : "hidden"} absolute top-[-50px] flex gap-7 items-center text-[24px] bg-emerald-100 px-4 py-1 rounded-full`}>
            <i value="like" className='fa-solid fa-thumbs-up text-emerald-700 bg-gray-200 p-1 rounded-full'></i>
            <i className="fa-solid fa-heart text-red-700 bg-gray-200 p-1 rounded-full"></i>
            <i className="fa-solid fa-face-sad-tear text-red-600 bg-gray-200 p-1 rounded-full"></i>

        </div>
          <i onMouseOver={handdleLike} className="fa-solid fa-thumbs-up text-[22px] handle-react-like cursor-pointer text-emerald-600 bg-gray-200 py-1 px-3 rounded-lg"></i>
        </div>
        <label className='flex items-center gap-3 py-1 px-3 rounded-lg bg-gray-200 cursor-pointer' htmlFor="comment"><i className="fa-solid fa-message text-[22px] text-emerald-600"></i> <span className='font-semibold text-gray-600'>Comment</span></label>
      </div>
      <form onSubmit={handleComment} className='flex gap-5 mt-6'>
        {
          user?.photoURL && <div><img className='w-10 rounded-full' src={user?.photoURL} alt="" /></div>
        }
          <input className='w-4/5 outline-none text-semibold text-gray-700 border bg-gray-200 h-10 rounded-full px-5' name="comment" id="comment" placeholder='Write a public comment'></input>
          <input type="submit" value="" className='hidden' />
      </form>
      <div>
        {
          comments.map(comment =>
            <DisplayComment user={user} key={comment._id} comment={comment} id={_id} />
          )
        }
        </div>
    </div>
  );
};

export default DisplayPost;