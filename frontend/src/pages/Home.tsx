import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { Loading } from "../components/Loading";
import { toast } from "sonner";
import axios from "axios";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "../../@/components/ui/sheet";
import { Menu, LogOut, User, Tag, Package } from "lucide-react";
import { Button } from "../components/ui/button";

interface UserData {
    id: string;
    name: string;
    email: string;
    role: string;
}

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    banner: string;
    category: {
        name: string;
    };
}

export function Home() {
    const [user, setUser] = useState<UserData | null>(null);
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (!token || !storedUser) {
            navigate("/login");
            return;
        }

        setUser(JSON.parse(storedUser));
        fetchProducts(token);
    }, []);

    async function fetchProducts(token: string) {
        try {
            const response = await api.get("/products", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setProducts(response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error("Erro ao carregar produtos", { position: "top-center" });
            }
        } finally {
            setLoading(false);
        }
    }

    function handleLogout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-[#baa88d] flex justify-center items-center">
                <Loading />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#baa88d]">

            {/* Header */}
            <header className="bg-amber-950 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                <span className="text-gray-100 font-semibold text-lg">☕ Coffee Shop</span>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-4">
                    <button
                        onClick={() => navigate("/categories")}
                        className="text-gray-300 hover:text-gray-100 text-sm flex items-center gap-1"
                    >
                        <Tag size={16} /> Categorias
                    </button>
                    <button
                        onClick={() => navigate("/products")}
                        className="text-gray-300 hover:text-gray-100 text-sm flex items-center gap-1"
                    >
                        <Package size={16} /> Produtos
                    </button>
                    <button
                        onClick={() => navigate("/profile")}
                        className="text-gray-300 hover:text-gray-100 text-sm flex items-center gap-1"
                    >
                        <User size={16} /> {user?.name}
                    </button>
                    <Button
                        onClick={handleLogout}
                        className="bg-gray-200 text-amber-950 hover:bg-gray-300 text-sm px-3 py-1 rounded-sm flex items-center gap-1"
                    >
                        <LogOut size={16} /> Sair
                    </Button>
                </nav>

                {/* Mobile nav — hamburguer */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className="text-gray-100">
                                <Menu size={24} />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-amber-950 border-amber-900 w-64">
                            <div className="flex flex-col gap-6 mt-8">
                                <p className="text-gray-300 text-sm">Olá, <span className="text-gray-100 font-medium">{user?.name}</span></p>

                                <div className="flex flex-col gap-4">
                                    <button
                                        onClick={() => navigate("/categories")}
                                        className="text-gray-300 hover:text-gray-100 text-sm flex items-center gap-2"
                                    >
                                        <Tag size={16} /> Categorias
                                    </button>
                                    <button
                                        onClick={() => navigate("/products")}
                                        className="text-gray-300 hover:text-gray-100 text-sm flex items-center gap-2"
                                    >
                                        <Package size={16} /> Produtos
                                    </button>
                                    <button
                                        onClick={() => navigate("/profile")}
                                        className="text-gray-300 hover:text-gray-100 text-sm flex items-center gap-2"
                                    >
                                        <User size={16} /> Meu perfil
                                    </button>
                                    <button
                                        onClick={handleLogout}
                                        className="text-red-400 hover:text-red-300 text-sm flex items-center gap-2"
                                    >
                                        <LogOut size={16} /> Sair
                                    </button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </header>

            {/* Conteúdo */}
            <main className="px-4 sm:px-6 lg:px-8 py-6 max-w-5xl mx-auto">
                <h1 className="text-gray-100 text-xl font-semibold mb-4">Produtos</h1>

                {products.length === 0 ? (
                    <p className="text-gray-200 text-sm">Nenhum produto encontrado.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-gray-200 rounded-md overflow-hidden flex flex-col"
                            >
                                <img
                                    src={product.banner}
                                    alt={product.name}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-3 flex flex-col gap-1">
                                    <span className="text-xs text-gray-500">{product.category?.name}</span>
                                    <h2 className="text-sm font-medium text-gray-700">{product.name}</h2>
                                    <p className="text-xs text-gray-500 line-clamp-2">{product.description}</p>
                                    <span className="text-sm font-semibold text-amber-950 mt-1">
                                        R$ {(product.price / 100).toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}