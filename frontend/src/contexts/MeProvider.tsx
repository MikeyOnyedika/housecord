import React, { PropsWithChildren, useReducer } from 'react';
import { Me, MeReducer } from '../types/Me';

const initialState: Me = {
  id: 'eieieiei',
  name: 'Mikey',
  img: '',
};


const MeContext = React.createContext<Me>(initialState);

export const useMeContext = () => {
  return React.useContext(MeContext);
};


const reducer: MeReducer = (state, action) => {
  return { ...state };
};

const MeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [me, dispatch] = useReducer(reducer, initialState);

  return <MeContext.Provider value={{ ...me }}>{children}</MeContext.Provider>;
};

export default MeProvider;
