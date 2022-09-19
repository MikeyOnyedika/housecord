import Nav from '../../components/Nav';
import Sidebar from '../../components/Sidebar';
import { Navigate, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './styles.css'

const Dashboard = () => {
  const location = useLocation();
  const path = location.pathname;

  
  if (path === '/rooms') {
    return <Navigate to={'/rooms/@me'} />;
  }
  
  return (
    <div className="flex ">
      <section className="container">
        <Nav>{<Sidebar />}</Nav>
        <Outlet />
      </section>
    </div>
  );
};

export default Dashboard;
