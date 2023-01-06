import { useEffect, useState } from "react"
import Login from "./pages/Login"
import { BrowserRouter as Router } from 'react-router-dom'
import AuthContext from "./context/AuthContext";
import PrivatedRoute from "./routes/PrivatedRoute";
import PublicRoutes from "./routes/PublicRoutes";
import AuthProvider from "./context/AuthContext";


function App() {

  const isLogged = !!localStorage.getItem('token')

  return (

    <AuthProvider>
      {isLogged ?
        <PrivatedRoute />
        :
        <PublicRoutes />}
    </AuthProvider>
  )
}

export default App
