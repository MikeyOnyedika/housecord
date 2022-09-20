import Styles from './styles.module.css';
import { useDMContext } from '../../contexts/DMProvider';
import { useHouseContext } from '../../contexts/HouseProvider';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const { dmSidebar, isDmActive } = useDMContext();
  const { isHouseActive, house } = useHouseContext();

  // render out the dms
  if (isDmActive) {
    return (
      <section className={Styles.Sidebar}>
        <input
          type="text"
          className={'form-group__text-input ' + Styles.Sidebar__search}
          placeholder={'Search specific DM ...'}
        />
        <div className={'flex flex--column ' + Styles.DMs}>
          <div>
            <h2 className={Styles.Sidebar__title}>Direct Messages</h2>
          </div>

          <ul>{dmSidebar.map((dm: any) => dm)}</ul>
        </div>
      </section>
    );
    // or render a house
  } else if (isHouseActive) {
    console.log(house);
    return (
      <section className={Styles.Sidebar}>
        <div>
          <h1 className={Styles.HouseName}>{house.title}</h1>
        </div>
        <div>
          <h2 className={Styles.Sidebar__title}>Description</h2>
          <p className={Styles.Sidebar__description}>{house.description}</p>
        </div>
        <div>
          <h2 className={Styles.Sidebar__title}>Rooms</h2>
          <ul className={Styles.RoomListings}>
            {house.rooms.map((room: any) => (
              <Link to="">
                <li className={Styles.Room}>
                  <p
                    className={`${Styles.Sidebar__title} ${Styles.Room__title} `}
                  >
                    {room.title}
                  </p>
                  <p className={`${Styles.Sidebar__description} ${Styles.Sidebar__description___forRoom}`}>
                    {room.description}
                  </p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </section>
    );
  } else {
    console.log('No nav item selected yet');
  }
};

export default Sidebar;
