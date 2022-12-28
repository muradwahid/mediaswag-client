import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import register from '../../assests/register.jpg'
import { AuthContext } from '../../Contexts/AuthProvider';
const SignUp = () => {
	const { createUserEmailPass } = useContext(AuthContext)
	const handleRegister = (e) => {
		e.preventDefault();
		const form = e.target;
		const fname = form.fname.value;
		const lname = form.lname.value;
		const email = form.email.value;
		const password = form.password.value;
		createUserEmailPass(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
			})
			.catch(error=>console.error(error))
	}
	return (
		<div className='flex justify-center gap-6 mt-10'>
			<div className='w-1/2 lg:block hidden'>
				<img src={register} alt="" />
			</div>
			<div className='lg:w-[35%] bg-emerald-600 px-12 py-12 rounded-tl-[150px] rounded-br-[150px] text-white'>
				<h3 className='text-4xl font-bold text-gray-100 text-center pb-8'>Register</h3>
				<form onSubmit={handleRegister}>
					<div className='lg:flex gap-3'>
						<input type="text" name='fname' className='lg:w-1/2 w-full mb-8 py-2 px-4 rounded-full bg-[#ff000000] border-2 placeholder:text-white' placeholder='First name' />
						<input type="text" name='lname' className='lg:w-1/2 w-full mb-8 py-2 px-4 rounded-full bg-[#ff000000] border-2 placeholder:text-white' placeholder='Last name' />
					</div>
					<input type="email" name='email' className='w-full mb-8 py-2 px-4  rounded-full  bg-[#ff000000] border-2 placeholder:text-white' placeholder='Email address' />
					<input type="password" name='password' className='w-full mb-8 py-2 px-4  rounded-full  bg-[#ff000000] border-2 placeholder:text-white' placeholder='Password' />
					<div className='text-center my-4 text-[19px] font-semibold'>
						<input className='bg-gradient-to-r from-emerald-800 to-blue-900 text-gray-100 px-20 py-3 rounded-full drop-shadow-2xl cursor-pointer' type="submit" value="Register" />

					</div>
				</form>
				<div className='text-center'>
					<p className='text-gray-100'>Already have an account?<Link className='underline' to='/login'> Please login.</Link></p>
				</div>
			</div>
		</div>
	);
};

export default SignUp;