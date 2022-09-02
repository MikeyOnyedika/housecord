import React from 'react';
import LogoImage from '../LogoImage';
import Separator from '../Separator';
import { Link } from 'react-router-dom';
import './styles.css';
import { FaWrench, FaPlus } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import ImageHolder from '../ImageHolder';

const NavBar = () => {
  const houses = [
    { id: 'asdfas', url: '' },
    { id: 'werkwerk', url: '' },
    { id: 'kdfakdf', url: '' },
    { id: 'lelrwe', url: '' },
  ];

  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-list__item dm-btn">
            <Link to="/rooms/@me">
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
            </Link>
          </li>
          <Separator />

          <div className="house-list">
            {houses.map((house) => (
              <li className="navbar-list__item">
                <Link to={`/rooms/${house.id}`}>
                  <ImageHolder url={house.url} />
                </Link>
              </li>
            ))}
          </div>

          <li className="navbar-list__item">
            <Separator />
            <button className="dm-link__image">
              <IconContext.Provider value={{ size: '1.5rem', color: 'var(--primary-clr)'}}>
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
