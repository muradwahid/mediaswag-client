import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import login from '../../assests/login.png'
import { AuthContext } from '../../Contexts/AuthProvider';
const Login = () => {
	const { user, signinPopup } = useContext(AuthContext);
	const googleProvider = new GoogleAuthProvider();
	const navigate = useNavigate('/');
	const handleGoogleLogin = () => {
		signinPopup(googleProvider)
			.then(result => {
				const user = result.user;
				console.log(user);
				navigate('/')
			})
		.catch(error=>console.error(error))

	}
	return (
		<div className='flex justify-center gap-6 mt-10'>
			<div>
				<img src={login} alt="" />
			</div>
			<div className='lg:w-[35%] bg-emerald-600 px-20 py-12 rounded-tl-[150px]'>
				<h3 className='text-4xl font-bold text-gray-100 text-center pb-8'>Login</h3>
				<form>
					<input type="text" name='name' className='w-full mb-8 py-2 px-4 rounded-full bg-[#ff000000] border-2 placeholder:text-white' placeholder='Username' />
					<input type="password" name='password' className='w-full mb-8 py-2 px-4  rounded-full  bg-[#ff000000] border-2 placeholder:text-white' placeholder='Password'/>
					<div className='flex justify-between' >
						<label htmlFor="remember">
							<input type="radio" name="remember" id="remember" />
							<span className='text-[18px] ml-1 text-gray-100'>Remember me</span>
						</label>
						<p className='text-gray-100 hover:underline cursor-pointer'>Forgot Password</p>
					</div>
					<div className='text-center my-10 text-[19px] font-semibold'>
						<input className='bg-gradient-to-r from-emerald-800 to-blue-900 text-gray-100 px-20 py-3 rounded-full drop-shadow-2xl cursor-pointer' type="submit" value="Login" />
						
					</div>
				</form>
				<div className='text-center'>
					<Link onClick={handleGoogleLogin} className='bg-gradient-to-r from-blue-900 to-emerald-800 text-gray-100 px-20 py-3 rounded-full drop-shadow-2xl'>Google Login</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;