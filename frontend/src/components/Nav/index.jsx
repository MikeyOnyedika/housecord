import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Flex from '../Flex';
import NavItem from '../NavItem';
import './styles.css';
import Separator from '../Separator';
import SettingsIcon from '../../assets/settings.svg';
import HouseCordImage from '../../assets/housecord.svg';
const items = [
  { id: 1, imgSrc: HouseCordImage },
  { id: 2, imgSrc: HouseCordImage },
  { id: 3, imgSrc: HouseCordImage },
  { id: 4, imgSrc: HouseCordImage },
  { id: 5, imgSrc: HouseCordImage },
  { id: 6, imgSrc: HouseCordImage },
  { id: 7, imgSrc: HouseCordImage },
];
const Nav = () => {
  return (
    <Flex curvedEdge="true" bgColor="prim" height="match-parent">
      <nav className="nav">
        <ul className="nav__nav-list">
          <Flex direction="column" gap="md">
            <li className="nav__nav-item nav__nav-item--bg-accent">
              <NavItem imgSrc={HouseCordImage} />
            </li>
            <Separator />

            {items.map((item) => (
              <li className="nav__nav-item" key={item.id}>
                <NavItem imgSrc={item.imgSrc} />
              </li>
            ))}

            <Separator />
            <li className="nav__nav-item nav__nav-item--bg-accent">
              <NavItem imgSrc={SettingsIcon} />
            </li>
          </Flex>
        </ul>
      </nav>
    </Flex>
  );
};

export default Nav;
