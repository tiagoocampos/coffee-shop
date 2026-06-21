import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import { api } from "../../services/api";
import axios from "axios";
import { Loading } from "../../components/Loading";
import { toast } from "sonner";

export function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({ email: "", password: "" });

    const navigate = useNavigate();

    async function handleLogin() {
        try {
            if (!email || !password) {
                toast.error("Preencha todos os campos", { position: "top-center" });
                return;
            }
            setErrors({ email: "", password: "" });
            setLoading(true);

            const response = await api.post("/session", { email, password });

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify({
                id: response.data.id,
                name: response.data.name,
                email: response.data.email,
                role: response.data.role,
            }));

            

            toast.success("Login realizado com sucesso!", { position: "top-center" });
            navigate("/");

        } catch (error) {
            if (axios.isAxiosError(error)) {
                const data = error.response?.data;

                if(data?.details){
                    const fieldErrors = { email: "", password: "" };

                    data.details.forEach((d: { message: string; path: string }) => {
                        if (d.path === "email") fieldErrors.email = d.message;
                        if (d.path === "password") fieldErrors.password = d.message;
                    });

                    setErrors(fieldErrors);
                } else{
                    const field = data?.field;
                    const message = data?.error || "Erro ao fazer login";

                    if (field === "email") {
                        setErrors(prev => ({ ...prev, email: message }));
                    } else if (field === "password") {
                        setErrors(prev => ({ ...prev, password: message }));
                    } else {
                        toast.error(message, { position: "top-center" });
                    }
                }                
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-[#baa88d] flex justify-center items-center px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 w-full p-6 rounded max-w-xs sm:max-w-sm">

                <div className="flex flex-col gap-1">
                    <label className="text-sm text-gray-100">Email</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="seu@email.com"
                        className="border border-gray-400 bg-gray-200 text-gray-500 placeholder:text-gray-500 rounded-md px-3 py-3 text-sm outline-none focus:ring-1 focus:ring-ring"
                    />
                    {errors.email && <span className="text-red-800 text-xs">{errors.email}</span>}
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm text-gray-100">Senha</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="sua senha"
                        className="border border-gray-400 bg-gray-200 text-gray-500 placeholder:text-gray-500 rounded-md px-3 py-3 text-sm outline-none focus:ring-1 focus:ring-ring"
                    />
                    {errors.password && <span className="text-red-800 text-xs">{errors.password}</span>}
                </div>

                <Button
                    onClick={handleLogin}
                    disabled={loading}
                    className="bg-amber-950 w-full cursor-pointer rounded-sm py-3 text-gray-100 text-sm font-medium hover:bg-amber-950/80"
                >
                    {loading ? <Loading /> : "Entrar"}
                </Button>

                <p className="text-sm text-gray-100 text-center">
                    Não tem conta?{" "}
                    <Link to="/register" className="text-foreground underline hover:text-gray-300 underline-offset-4">
                        Cadastrar
                    </Link>
                </p>

            </div>
        </div>
    )
}