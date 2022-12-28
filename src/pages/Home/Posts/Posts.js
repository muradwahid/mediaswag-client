import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Posts = () => {
  const { user } = useContext(AuthContext);
  const imgHostKey = process.env.REACT_APP_imgbb_key;
  const handlePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const postText = form.postText.value;
    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=684c6274d794de1079ffad375804e558`;
    fetch(url, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(imgData => {
        console.log(imgData.data.url,postText,user?.email)
        if (imgData.success) {
          const postData = {
            text: postText,
            email: user?.email,
            image: imgData.data.url,
            profilePhoto:user?.photoURL
          }
          fetch(`http://localhost:5000/posts`, {
            method: "POST",
            headers: {
              "content-type":"application/json"
            },
            body: JSON.stringify(postData),
          })
            .then(res => res.json())
            .then(postData => {
              console.log(postData);
            })
        }

      })
  }
  return (
    <div className='w-3/5 mx-auto bg-white rounded-3xl'>
      <form onSubmit={handlePost} className='mt-5 pt-2 px-4'>
        <i className="fa-regular fa-pen-to-square text-[22px] text-emerald-600"></i>
        <div className='flex h-40'>
          <div>
            <img className='w-8 rounded-full mt-6' src={user?.photoURL} alt="" />
          </div>
          <textarea className='w-full px-10 pt-7 outline-none' name="postText" placeholder='Write something about you....'></textarea>
        </div>
        <div className='flex justify-between items-center pb-4'>
          <div className=''>
            <div className=''>
              <label htmlFor="imgs" className='bg-emerald-100 px-4 py-2 rounded-full font-semibold text-emerald-700'><i className="fa-solid fa-camera text-[22px]"></i> Media</label>
            </div>
            <input name="image" type="file" id="imgs" className='hidden' />
          </div>
          <div>
            <input type="submit" value="Post" className='bg-emerald-600 rounded-full text-gray-100 py-1 px-4 text-xl font-semibold' />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Posts;