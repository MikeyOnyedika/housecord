import React from 'react';
import { Outlet } from 'react-router-dom';

const HouseChat = () => {
  return (
    <div>
      HouseChat
      <Outlet />
    </div>
  );
};

export default HouseChat;
