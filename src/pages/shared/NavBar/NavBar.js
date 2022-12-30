import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import '../NavBar/NavBar.css';
const NavBar = () => {
	const { user,logOut } = useContext(AuthContext);
	const [toggle, setToggle] = useState(false);
	const [search, setSearch] = useState(true);
	const [profileModal, setProfileModal] = useState(false);
	const handleLogout = () => {
		logOut();
		setProfileModal(false);
	}
	return (
		<header className='bg-white shadow-md py-2 fixed w-full top-0'>
			<nav className='w-4/5 mx-auto flex justify-between items-center'>
				<div className='flex gap-8 text-[22px] items-center'>
					<p><i className="fa-solid fa-bell text-emerald-600"></i></p>
					<label htmlFor="message-modal"><p><i className="fa-solid fa-message text-emerald-600 cursor-pointer"></i></p></label>
					<div><input className='placeholder:text-[17px] border rounded-full py-2 px-4 outline-emerald-600 text-[17px] lg:block hidden' type="search" name="" id="" placeholder='Search' />
						<div>
							{
								search ? <i onClick={() => setSearch(!search)} className="fa-solid fa-magnifying-glass text-emerald-600 lg:hidden block"></i> : <div className='relative'>
									<input className='lg:hidden block placeholder:text-[17px] border rounded-full py-[6px] px-4 outline-emerald-600 text-[17px] mr-2' type="search" name="" id="" placeholder='Search' />

									<i onClick={() => setSearch(!search)} className="fa-solid fa-x absolute text-[16px] top-[12px] right-6 text-emerald-600 lg:hidden block"></i>
								</div>
							}
						</div></div>
				</div>
				<NavLink to="/" className={`lg:pr-[190px] ${search ? 'lg:pr-[190px]' : "pr-[200px]"}`} >
					{({ isActive }) => (
						<i
							className={
								isActive ? "fa-solid fa-house border-b-2 pb-1 border-emerald-600 text-[22px] text-emerald-600" : "fa-solid fa-house text-[22px] text-emerald-600 pb-1"
							}
						>
						</i>
					)}
				</NavLink>
				<div className='cursor-pointer'>
					<div onClick={()=>setProfileModal(!profileModal)} className="avatar online lg:block hidden">
						{
							user?.photoURL ? <div onClick={() => setProfileModal(!profileModal)} className="w-12 rounded-full">
								<img src={user?.photoURL} alt="" />
							</div> : <div className='tex-[20px]'>
								<i className="fa-solid fa-user text-3xl text-emerald-600"></i>
							</div> 
						}
					</div>
					<div onClick={() => setToggle(!toggle)} className='text-[22px] text-emerald-600 lg:hidden block'>
						{
							!toggle ? <i className="fa-solid fa-bars"></i>
								: <i className="fa-solid fa-x"></i>
						}
					</div>
				</div>
			</nav>
			{
				profileModal ? <div className='absolute right-20 top-24 w-80 bg-emerald-200 px-6 py-7 rounded-2xl '>
					<div className='flex items-center gap-2'>
						{
							user?.photoURL ? <img className='w-9 rounded-full' src={user.photoURL} alt="" /> :null
						}
						<p className='font-semibold text-emerald-800'>{user?.displayName}</p>
					</div>
					<div className='text-center mt-4'>
						<Link to={`/profile/${user?.email}/posts`} className='bg-gradient-to-t from-emerald-900 to-emerald-500 rounded px-3 py-2 text-gray-100 '>View Profile</Link>
					</div>
					<div className='mt-8'>
						<Link className='flex gap-3 items-center font-semibold text-emerald-800 hover:bg-emerald-700 hover:text-gray-100 py-2 px-2 rounded-md cursor-pointer mb-2 transition duration-300'>
							<i className="fa-solid fa-gear "></i>
							<p>Settings</p>
						</Link>
						<Link className='flex gap-3 items-center font-semibold text-emerald-800 hover:bg-emerald-700 hover:text-gray-100 py-2 px-2 rounded-md cursor-pointer mb-2 transition duration-300'>
							<i className="fa-solid fa-circle-question"></i>
							<p>Help</p>
						</Link>
						<Link className='flex gap-3 items-center font-semibold text-emerald-800 hover:bg-emerald-700 hover:text-gray-100 py-2 px-2 rounded-md cursor-pointer mb-2 transition duration-300'>
							<i className="fa-solid fa-right-from-bracket"></i>
							<p onClick={handleLogout}>Log Out</p>
						</Link>
					</div>
				</div>:null
			}
		</header>
	);
};

export default NavBar;