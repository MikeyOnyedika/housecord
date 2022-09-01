import React from 'react';
import { Outlet } from 'react-router-dom';

const PublicHouse = () => {
  return (
    <div>
      PublicHouse
      <Outlet />
    </div>
  );
};

export default PublicHouse;
