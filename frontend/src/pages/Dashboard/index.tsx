import Nav from '../../components/Nav';
import Sidebar from '../../components/Sidebar';
import { Navigate, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './styles.css';

const Dashboard = () => {
  const location = useLocation();
  const path = location.pathname;

  if (path === '/rooms' || path === '/rooms/') {
    return <Navigate to={'/rooms/@me'} />;
  }

  return (
    <div className="container">
      <Nav>{<Sidebar />}</Nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
