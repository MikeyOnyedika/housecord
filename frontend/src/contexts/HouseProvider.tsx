import React, { PropsWithChildren } from 'react';

const HouseContext = React.createContext<any>(null);

export function useHouseContext() {
  return React.useContext(HouseContext);
}

const HouseProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const houses = [
    { id: 'asdfas', title: 'Webdev for beginners', url: '', rooms: [] },
    {
      id: 'werkwerk',
      title: 'Wacky coders',
      url: '',
      rooms: [],
      description:
        'put your coding skills to the test building wacky little programs with a bunch of room mates',
    },
    {
      id: 'kdfakdf',
      title: 'Html simplified',
      url: '',
      rooms: [],
      description: 'for those who just love things broken way down for them',
    },
    {
      id: 'lelrwe',
      title: 'Dumb code coder',
      url: '',
      rooms: [],
      description: 'all dumb coders gather in this house',
    },
  ];

  // used to know if any house has been selected
  const [isActive, setIsActive] = React.useState(false);
  // keeps record of the last house that was visited
  const [lastVisitedHouse, setLastVisitedHouse] = React.useState<object>({});

  function getHouse(id: string) {
    return houses.find((house) => house.id === id);
  }

  function showHouse(show: boolean, id?: string) {
    setIsActive(show);
    if (show === true) {
      if (id) {
        setLastVisitedHouse(() => {
          const house = getHouse(id as string);
          return { ...house };
        });
      }
    }
  }

  return (
    <HouseContext.Provider
      value={{
        houses,
        showHouse,
        house: lastVisitedHouse,
        isHouseActive: isActive,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseProvider;
