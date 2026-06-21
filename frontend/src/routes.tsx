import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { Categories } from "./pages/categories";
import { Products } from "./pages/products";
import { Orders } from "./pages/orders";
import { Profile } from "./pages/profile";

export function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/products" element={<Products />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}
