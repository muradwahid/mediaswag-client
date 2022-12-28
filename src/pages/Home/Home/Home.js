import React from 'react';
import DisplayPost from '../DisplayPost/DisplayPost';
import Posts from '../Posts/Posts';

const Home = () => {
	return (
		<div>
			<Posts />
			<DisplayPost/>
		</div>
	);
};

export default Home;