import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import DisplayPost from '../DisplayPost/DisplayPost';
import MessageModal from '../MessageModal/MessageModal';
import Posts from '../Posts/Posts';

const Home = () => {
	const { user } = useContext(AuthContext);
	const {data:posts=[],isLoading,refetch} = useQuery({
		queryKey: ['posts'],
		queryFn: async () => {
			const res = await fetch('https://my-app-server-ten.vercel.app/posts');
			const data = await res.json();
			return data;
		}
	})

	return (
		<div className='pt-20'>
			<Posts />
			<MessageModal/>
			{
				posts.map(post => <DisplayPost refetch={refetch} user={user} key={post._id} post={post} />)
			}
		</div>
	);
};

export default Home;