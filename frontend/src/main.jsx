import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/';
import Register from './pages/Register';
import Chat from './pages/Chat';
import DMChat from './pages/Chat/components/DMChat/';
import DM from './pages/Chat/components/DM';
import HouseChat from './pages/Chat/components/HouseChat';
import Room from './pages/Chat/components/Room';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rooms" element={<Chat />}>
          <Route path="@me/" element={<DMChat />}>
            <Route path=":id" element={<DM />} />
          </Route>
          <Route path=":houseId" element={<HouseChat />}>
            <Route path=":id" element={<Room />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
