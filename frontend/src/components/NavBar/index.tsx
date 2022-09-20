import React, { useEffect } from 'react';
import LogoImage from '../LogoImage';
import Separator from '../Separator';
import { NavLink } from 'react-router-dom';
import { FaWrench, FaPlus } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import ImageHolder from '../ImageHolder';
import { useDMContext } from '../../contexts/DMProvider';
import './styles.css';
import { useHouseContext } from '../../contexts/HouseProvider';

type FRType = React.FC< { func: () => void}  >
const FunctionRunner: FRType = ({ func }) => {
  useEffect(() => {
    func();
  }, []);
  return <></>;
}

const NavBar = () => {
  const { showDM } = useDMContext();
  const { houses, showHouse, lastVisitedHouse } = useHouseContext();

  function setDM(isShow: boolean) {
    if (isShow) {
      showDM(true);
    } else {
      showDM(false);
    }
  }

  function setHouse(isShow: boolean, houseId?: string) {
    if (isShow) {
      showHouse(true, houseId);
    } else {
      showHouse(false);
    }
  }

  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-list__item dm-btn">
            <NavLink
              to="/rooms/@me"
              className={({ isActive }) => {
                return isActive ? 'nav-link nav-link--highlight' : 'nav-link';
              }}
            >
              {({ isActive }) => {
                return (
                  <>
                    <FunctionRunner
                      func={() => {
                        if (isActive) {
                          setHouse(false)
                          setDM(true);
                        }
                      }}
                    />
                    <LogoImage
                      width={'var(--image-size)'}
                      height={'var(--image-size)'}
                      color={'var(--primary-clr)'}
                      bgColor={'var(--white-clr)'}
                      borderRadius={'50%'}
                      padding={'calc(var(--padding-inline) * 0.5)'}
                      borderWidth={'1px'}
                      borderColor={'var(--primary-clr)'}
                    />
                  </>
                );
              }}
            </NavLink>
          </li>
          <Separator />

          <div className="house-list">
            {houses.map((house: any) => (
              <li className="navbar-list__item" key={house.id}>
                <NavLink
                  to={`/rooms/${house.id}`}
                  className={({ isActive }) => {
                    if (isActive) {
                      return 'nav-link nav-link--highlight';
                    } else {
                      return 'nav-link';
                    }
                  }}
                >
                  {({ isActive }) => {
                    return (
                      <>
                        <FunctionRunner
                          func={() => {
                            if (isActive) {
                              setDM(false)
                              setHouse(true, house.id);
                            }
                          }}
                        />
                        <ImageHolder url={house.url} />
                      </>
                    );
                  }}
                </NavLink>
              </li>
            ))}
          </div>

          <li className="navbar-list__item">
            <Separator />
            <button className="dm-link__image">
              <IconContext.Provider
                value={{ size: '1.5rem', color: 'var(--primary-clr)' }}
              >
                <FaPlus />
              </IconContext.Provider>
            </button>
          </li>
        </ul>

        <div className="navbar__settings">
          <Separator />

          <button className="settings-btn dm-link__image">
            <IconContext.Provider
              value={{ size: '1.5rem', color: 'var(--primary-clr)' }}
            >
              <FaWrench />
            </IconContext.Provider>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
