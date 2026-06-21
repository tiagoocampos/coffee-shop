import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import { api } from "../../services/api";
import axios from "axios";
import { Loading } from "../../components/Loading";
import { toast } from "sonner";

export function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({ name: "", email: "", password: "" });
    const [loading, setLoading] = useState(false);

    async function handleRegister() {
        try {
            if(!name || !email || !password) {
                toast.error("Preencha corretamente os campos", { position: "top-center" });
                return
            }

            if(password !== confirmPassword) {
                
                return
            }
            setErrors({ name: "", email: "", password: "" });
            setLoading(true);
            await api.post("/users", { name, email, password });
            toast.success("Cadastro realizado com sucesso!", { position: "top-center" });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const data = error.response?.data;

                if (data?.details) {
                    const fieldErrors = { name: "", email: "", password: "" };

                    data.details.forEach((d: { message: string; path: string }) => {
                        if (d.path === "name") fieldErrors.name = d.message;
                        if (d.path === "email") fieldErrors.email = d.message;
                        if (d.path === "password") fieldErrors.password = d.message;
                    });

                    setErrors(fieldErrors);
                } else {
                    toast.error(data?.error || "Erro ao cadastrar", { position: "top-center" });
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
                    <label className="text-sm text-gray-100">Usuário</label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Seu nome de usuário"
                        className="border border-gray-400 bg-gray-200 text-gray-500 placeholder:text-gray-500 rounded-md px-3 py-3 text-sm outline-none focus:ring-1 focus:ring-ring"
                    />
                    {errors.name && (
                        <p className="text-xs text-red-800">{errors.name}</p>
                    )}
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm text-gray-100">Email</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="seu@email.com"
                        className="border  border-gray-400 bg-gray-200 text-gray-500 placeholder:text-gray-500 rounded-md px-3 py-3 text-sm outline-none focus:ring-1 focus:ring-ring"
                    />
                    {errors.email && (
                        <p className="text-xs text-red-800">{errors.email}</p>
                    )}
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm text-gray-100">Senha</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="mínimo 6 caracteres"
                        className="border  border-gray-400 bg-gray-200 text-gray-500 placeholder:text-gray-500 rounded-md px-3 py-3 text-sm outline-none focus:ring-1 focus:ring-ring"
                    />
                    {errors.password && (
                        <p className="text-xs text-red-800">{errors.password}</p>
                    )}
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm text-gray-100">Confirmar Senha</label>
                    <input
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password"
                        placeholder="Repita a senha"
                        className="border  border-gray-400 bg-gray-200 text-gray-500 placeholder:text-gray-500 rounded-md px-3 py-3 text-sm outline-none focus:ring-1 focus:ring-ring"
                    />
                    {confirmPassword && password !== confirmPassword && (
    <p className="text-xs text-red-900">As senhas devem ser iguais</p>
)}
                </div>

                <Button
                    onClick={handleRegister}
                    disabled={loading}
                    className="bg-amber-950 w-full cursor-pointer rounded-sm py-3 text-gray-100 text-sm font-medium hover:bg-amber-950/80"
                >
                    {loading ? <Loading /> : "Cadastrar"}
                </Button>

                <p className="text-sm text-gray-100 text-center">
                    Já tem conta?{" "}
                    <Link to="/login" className="text-foreground underline hover:text-gray-300 underline-offset-4">
                        Entrar
                    </Link>
                </p>

            </div>
        </div>
    )
}