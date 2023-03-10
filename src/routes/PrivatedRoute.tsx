import { BrowserRouter , Route, Routes } from "react-router-dom";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Users from "../pages/Users";


export default function PrivatedRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/users" element={<Users />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}


