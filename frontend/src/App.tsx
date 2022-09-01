import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './pages/Login/';
import Register from './pages/Register/';
import MyHouse from './pages/MyHouse/';
import PublicHouse from './pages/PublicHouse/';
import PrivateRoom from './components/PrivateRoom/';
import PublicRoom from './components/PublicRoom/';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={'/login'} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/rooms/@me" element={<MyHouse />}>
            <Route path=":id" element={<PrivateRoom />} />
          </Route>
          <Route path="/rooms/:houseId" element={<PublicHouse />}>
            <Route path=":id" element={<PublicRoom />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
