import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/users/Register";
import { Login } from "./pages/users/Login";

export function RoutesApp() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/register" element={<Register />}/>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </BrowserRouter>
    );
}
