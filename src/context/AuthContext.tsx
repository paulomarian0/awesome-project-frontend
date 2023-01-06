import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider ({children}) {
  
  const [name, setName] = useState()

  return(
    <AuthContext.Provider value={{name, setName}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;