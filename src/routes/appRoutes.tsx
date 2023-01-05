import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "../components/PageNotFound";
import Login from "../pages/Login";
import Users from "../pages/Users";


export default function appRoutes() {
    return (
        <Router>

        <Routes>
            <Route path="/users" element={<Users />}></Route>
            {/* <Route path="*" element={<PageNotFound />}></Route> */}

        </Routes>
        </Router>
    )
}


