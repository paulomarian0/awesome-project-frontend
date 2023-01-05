import React, { useState } from "react";

import AuthRoutes from "./authRoutes";
import AppRoutes from "./appRoutes";



const Routes = () => {
  let logged = false;

  if(localStorage.token) {
    console.log("tem token")
    logged = true;
  }

  return logged ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
