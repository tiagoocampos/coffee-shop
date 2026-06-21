import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/users/Register";
import { Login } from "./pages/users/Login";
import { Home } from "./pages/Home";

export function RoutesApp() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/register" element={<Register />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/" element={<Home />}/>
            </Routes>
        </BrowserRouter>
    );
}
