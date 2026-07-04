import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { Categories } from "./pages/categories";
import { Products } from "./pages/products";
import { ProductDetailsPage } from "./pages/products/[productId]";
import { Orders } from "./pages/orders";
import { Profile } from "./pages/profile";
import { PainelAdmin } from "./pages/admin/PainelAdmin";

export function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:productId" element={<ProductDetailsPage />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/admin" element={<PainelAdmin />} />
            </Routes>
        </BrowserRouter>
    );
}
