import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import DisplayPost from '../../Home/DisplayPost/DisplayPost';
import Posts from '../../Home/Posts/Posts';

const ProfilePosts = () => {
  const {user}=useContext(AuthContext)
  const { data:posts=[],refetch } = useQuery({
    queryKey: [`${user?.email}`],
    queryFn: async () => {
      const res = await fetch(`https://my-app-server-ten.vercel.app/profileposts/${user?.email}`);
      const data = await res.json();
      return data;
    }
  })
  return (
    <div>
      <Posts />
      {
        posts.map(post => <DisplayPost refetch={refetch} user={user} key={post._id} post={post} />)
      }
    </div>
  );
};

export default ProfilePosts;