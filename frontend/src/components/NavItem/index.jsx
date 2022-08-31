import React from 'react';
import Flex from '../Flex';
import './styles.css';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
  return (  
    <Flex  width="match-parent" height="match-parent"  >
      <NavLink to={"/"} >
        <img src={props.imgSrc} alt="pic" className='nav-item__img' />
      </NavLink>
    </Flex>
  );
};

export default NavItem;
