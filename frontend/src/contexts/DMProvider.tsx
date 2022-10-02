import React, { PropsWithChildren } from 'react';
import DMLink from '../components/DMLink';
import { MessageType } from '../types/MessageType';
import { useMeContext } from './MeProvider';

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
  const { name: myName, id: myId, img: myImg } = useMeContext();
  const [isDmActive, setIsDMActive] = React.useState<boolean>(false);
  const [currentDm, setCurrentDM] = React.useState<DM>({
    id: '',
    name: 'Christopher',
    imageUrl: '',
    status: Status.OFFLINE,
  });

  interface DM {
    id: string;
    name: string;
    imageUrl: string;
    status: Status;
    lastSeen?: string;
    conversations?: MessageType[];
  }

  const dummyData: DM[] = [
    {
      id: '3939393',
      name: 'John',
      imageUrl: '',
      status: Status.OFFLINE,
      lastSeen: '11-Sept-2022, 2:00pm',
      conversations: [
        {
          senderName: currentDm.name,
          senderId: 'eieiddisj',
          messageText: "Hi bro, hope you're doing fine",
          timeStamp: '22-Aug-2022, 2:00am',
          receiverName: '3939393',
          img: currentDm?.imageUrl,
        },
        {
          senderName: myName,
          senderId: myId,
          messageText: 'Doing good, n you??',
          timeStamp: '22-Aug-2022, 2:00am',
          receiverName: currentDm.name,
          img: myImg,
        },
      ],
    },
    {
      id: 'kdkdkfkaf',
      name: 'Mikey',
      imageUrl: '',
      status: Status.ONLINE,
      lastSeen: undefined,
      conversations: [{
        senderName: myName,
        senderId: myId,
        messageText: 'Doing good, n you??',
        timeStamp: '22-Aug-2022, 2:00am',
        receiverName: currentDm.name,
        img: myImg,
      },],
    },
    {
      id: '4lrlro4',
      name: 'Amaka',
      imageUrl: '',
      status: Status.OFFLINE,
      lastSeen: '22-Aug-2022, 5:30am',
      conversations: [{
        senderName: myName,
        senderId: myId,
        messageText: 'Doing good, n you??',
        timeStamp: '22-Aug-2022, 2:00am',
        receiverName: currentDm.name,
        img: myImg,
      },],
    },
    {
      id: '02-22kdj',
      name: 'Veronica',
      imageUrl: '',
      status: Status.OFFLINE,
      lastSeen: '13-July-2022, 7:06am',
      conversations: [{
        senderName: myName,
        senderId: myId,
        messageText: 'Doing good, n you??',
        timeStamp: '22-Aug-2022, 2:00am',
        receiverName: currentDm.name,
        img: myImg,
      },],
    },
  ];

  const dms = dummyData.map((dm) => (
    <li key={dm.id} onClick={() => setCurrentDM(dm)}>
      <DMLink id={dm.id} name={dm.name} url={dm.imageUrl} />
    </li>
  ));

  function showDM(value: boolean) {
    setIsDMActive(value);
  }

  return (
    <DMContext.Provider
      value={{ dmSidebar: dms, isDmActive, showDM, dm: currentDm }}
    >
      {children}
    </DMContext.Provider>
  );
};

export enum Status {
  ONLINE = 'true',
  OFFLINE = 'false',
}

export default DMProvider;
