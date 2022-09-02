import { Outlet } from 'react-router-dom';
import Nav from '../../components/Nav';
import MyDMListings from '../../components/MyDMListings';
import './styles.css'

const MyHouse = () => {
  return (
    <div className="flex ">
      <section className="container">
        <Nav>
          <MyDMListings />
        </Nav>
        <Outlet />
      </section>
    </div>
  );
};

export default MyHouse;
