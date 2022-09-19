import React, { PropsWithChildren } from 'react'

const HouseContext = React.createContext<any>(null)

export function useHouseContext(){
    return React.useContext(HouseContext)
}

const HouseProvider: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <HouseContext.Provider value={{}}>
        {children}
    </HouseContext.Provider>
  )
}

export default HouseProvider