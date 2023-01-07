import React, { createContext, useState } from "react";

export interface IAuthProvider {
  children?: JSX.Element
}

export const AuthContext = createContext({});

function AuthProvider({ children }: IAuthProvider) {
  const [name, setName] = useState()

  return (
    <AuthContext.Provider value={{ name, setName }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;