import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './pages/Login/';
import Register from './pages/Register/';
import Dashboard from './pages/Dashboard';
import DMs from './components/DMs';
import House from './components/House';
import OpenDM from './components/OpenDM';
import OpenRoom from './components/OpenRoom';
import Friends from './components/Friends';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={'/login'} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/rooms" element={<Dashboard />}>
            <Route path="@me/friends" element={<Friends />} />
            <Route path="@me" element={<DMs />}>
              <Route path=":id" element={<OpenDM />} />
            </Route>

            <Route path=":houseId" element={<House />}>
              <Route path=":id" element={<OpenRoom />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
