import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../shared/NavBar/NavBar';
import ViewProfile from '../ViewProfile/ViewProfile/ViewProfile';

const Profile = () => {
  return (
    <div>
      <NavBar />
      <ViewProfile />
      <Outlet/>
    </div>
  );
};

export default Profile;