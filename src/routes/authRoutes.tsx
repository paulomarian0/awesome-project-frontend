import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";

export default function AuthRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
