import Styles from './styles.module.css';
import { useDMContext } from '../../contexts/DMProvider';
import { useHouseContext } from '../../contexts/HouseProvider';

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
    console.log(house)
    return (
      <section className={Styles.Sidebar}>
        <div className={'flex flex--column '}>
          <h1 className='h1'>{ house.title }</h1>
          <div>
            {/* <h2 className={Styles.Sidebar__title}>Description</h2> */}
            <p>{house.description}</p>
          </div>
          <div>
            <h2 className={Styles.Sidebar__title}>Rooms</h2>
            <ul>{house.rooms.map((room: any) => room)}</ul>
          </div>
        </div>
      </section>
    );
  } 
  // else {
  //   throw new Error("something's wrong");
  // }
};

export default Sidebar;
