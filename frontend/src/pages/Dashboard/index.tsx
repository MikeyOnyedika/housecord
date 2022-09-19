import Nav from '../../components/Nav';
import MyDMListings from '../../components/MyDMListings';
import { Navigate, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './styles.css'

const Dashboard = () => {
  let SecondaryNav = MyDMListings;
  const location = useLocation();
  const path = location.pathname;

  
  if (path === '/rooms') {
    return <Navigate to={'/rooms/@me'} />;
  }
  
  // TODO: switch the SecondaryNav to HouseRooms when the route is something like /rooms/<houseid>
  // if (path === /rooms/.source) {
  //   console.log(path);
  // }
  return (
    <div className="flex ">
      <section className="container">
        <Nav>{<SecondaryNav />}</Nav>
        <Outlet />
      </section>
    </div>
  );
};

export default Dashboard;
