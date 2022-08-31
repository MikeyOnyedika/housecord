import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/';
import Register from './pages/Register';
import MyHouseChat from './pages/MyHouseChat';
import PublicHouseChat from './pages/PublicHouseChat';
import MyRoomChat from './components/MyRoomChat';
import PublicRoomChat from './components/PublicRoomChat';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rooms/@me" element={<MyHouseChat />}>
          <Route path=":id" element={<MyRoomChat />} />
        </Route>
        <Route path="/rooms/:houseId" element={<PublicHouseChat />}>
          <Route path=":roomId" element={<PublicRoomChat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
