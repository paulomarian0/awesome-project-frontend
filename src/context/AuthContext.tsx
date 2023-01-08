import React, { createContext, useState } from "react";

export interface IAuthProvider {
  children?: JSX.Element
}

export const AuthContext = createContext({} as any);

function AuthProvider({ children }: IAuthProvider) {
  const [needUpdateListUser, setNeedUpdateListUser] = useState(false)
  const [name, setName] = useState()
  const [isAdmin, setIsAdmin] = useState(false);
  const [userId, setUserId] = useState();

  return (
    <AuthContext.Provider value={{
      name,
      setName,
      needUpdateListUser,
      setNeedUpdateListUser,
      isAdmin,
      setIsAdmin,
      userId,
      setUserId
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;