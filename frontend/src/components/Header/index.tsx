import React from 'react';
import LogoImage from '../LogoImage';
import './styles.css'

const Header = () => {
  return (
    <div className="flex flex--align-base header">
      <LogoImage
        color="var(--white-clr)"
        width="var(--fs-xx-lg)"
        height="var(--fs-xx-lg)"
        bgColor="var(--primary-clr)"
      />
      <p className='header__title'>ousecord</p>
    </div>
  );
};

export default Header;
