import React from 'react';
import Page from '../../components/Page';
import Main from '../../components/Main';
import Flex from '../../components/Flex';
import { Outlet } from 'react-router-dom';
import Nav from '../../components/Nav';
import MyRoomListings from '../../components/MyRoomListings';

const MyHouseChat = () => {
  return (
    <Page>
      <Main>
        <Flex width="match-parent" height="match-parent">
          <Flex bgColor="sec" height="match-parent" curvedEdge="true">
            <Nav />
            <MyRoomListings />
          </Flex>
          <Outlet />
        </Flex>
      </Main>
    </Page>
  );
};

export default MyHouseChat;
