import Styles from './styles.module.css';
import { useDMContext } from '../../contexts/DMProvider';
import {useHouseContext} from '../../contexts/HouseProvider'

const Sidebar = () => {
  const { dmSidebar, isDmActive } = useDMContext();

  return (
    <section className={Styles.Sidebar}>
      <input
        type="text"
        className={"form-group__text-input " + Styles.Sidebar__search}
      />
      <div className={"flex flex--column " + Styles.DMs}>
        {isDmActive && (  
          <>
            <div>
              <h2 className={Styles.Sidebar__title}>Direct Messages</h2>
            </div>

            <ul>
              { dmSidebar.map((dm: any) => (
                dm
              )) }
            </ul>
          </>
        )}
      </div>
    </section>
  );
};

export default Sidebar;
