import { useEffect, useState } from "react"
import Login from "./pages/Login"
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from "./routes";
import AuthContext from "./context/AuthContext";
import MainRoutes from "./routes/MainRoutes";


function App() {

  let logged = false;

  if(localStorage.token) {
    console.log("tem token")
    logged = true;
  }

  return (
    <AuthContext.Provider value={{ signed: logged }}>
    <>
      <MainRoutes />
    </>
  </AuthContext.Provider>
  )
}

export default App
