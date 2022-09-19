import React, { PropsWithChildren } from 'react';
import DMLink from '../components/DMLink';

// interface DMContextType {
//     isDmActive: boolean
//     showDM: (val: any) => any
//     dmSidebar: JSX.Element[]
// }

const DMContext = React.createContext<null | any>(null);

export function useDMContext() {
  return React.useContext(DMContext);
}

const DMProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isDmActive, setIsDMActive] = React.useState<boolean>(false);
  interface DM {
    id: string;
    name: string;
    url: string;
  }

  const dummyData: DM[] = [
    { id: '3939393', name: 'John', url: '' },
    { id: 'kdkdkfkaf', name: 'Mikey', url: '' },
    { id: '4lrlro4', name: 'Amaka', url: '' },
    { id: '02-22kdj', name: 'Veronica', url: '' },
  ];

  const dms = dummyData.map((dm) => (
    <li key={dm.id}>
      <DMLink id={dm.id} name={dm.name} url={dm.url} />
    </li>
  ));

  return (
    <DMContext.Provider
      value={{ dmSidebar: dms, isDmActive, showDM: setIsDMActive }}
    >
      {children}
    </DMContext.Provider>
  );
};

export default DMProvider;
