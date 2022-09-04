import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './pages/Login/';
import Register from './pages/Register/';
import HouseChat from './pages/HouseChat';
import DMChatRoom from './components/DMChatRoom/';
import PublicChatRoom from './components/PublicChatRoom';
import DMChatRoomWrapper from './components/DMChatRoomWrapper/';
import PublicChatRoomWrapper from './components/PublicChatRoomWrapper/';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={'/login'} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/rooms" element={<HouseChat />}>
            <Route path="@me" element={<DMChatRoomWrapper />}>
              <Route path=":id" element={<DMChatRoom />} />
            </Route>

            <Route path=":houseId" element={<PublicChatRoomWrapper />}>
              <Route path=":id" element={<PublicChatRoom />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
