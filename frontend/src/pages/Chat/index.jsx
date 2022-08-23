import React from 'react';
import { Outlet } from 'react-router-dom';

const Chat = () => {
  return (
    <div>
      Chat
      <Outlet />
    </div>
  );
};

export default Chat;
