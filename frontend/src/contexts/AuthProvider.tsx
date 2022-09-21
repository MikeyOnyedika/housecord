import React, { PropsWithChildren } from 'react'
const AuthContext = React.createContext<null | any>(null)

export function useAuthContext(){
  return React.useContext(AuthContext)
}

const AuthProvider: React.FC<PropsWithChildren> = ({children})  => {

  const me = {
    id: 'weieirlwei',
    
  }


  return (
    <AuthContext.Provider value={{ me }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider