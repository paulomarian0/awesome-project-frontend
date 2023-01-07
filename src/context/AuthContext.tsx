import React, { createContext, useState } from "react";

export interface IAuthProvider {
  children?: JSX.Element
}



export const AuthContext = createContext({} as any);

function AuthProvider({ children }: IAuthProvider) {
  const [name, setName] = useState()
  const [needUpdateListUser, setNeedUpdateListUser] = useState(false)

  return (
    <AuthContext.Provider value={{ name, setName, needUpdateListUser, setNeedUpdateListUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;