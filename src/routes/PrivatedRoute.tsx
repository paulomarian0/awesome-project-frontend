import { BrowserRouter , Route, Routes } from "react-router-dom";
import PageNotFound from "../components/PageNotFound";
import Login from "../pages/Login";
import Users from "../pages/Users";


export default function PrivatedRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/users" element={<Users />} />
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}


