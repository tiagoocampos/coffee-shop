import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { useState } from "react";

export function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <div className="flex justify-center bg-stone-900 items-center h-screen">
                <div className="flex flex-col gap-4 w-full bg-gray-200 p-4 rounded max-w-sm">

                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-muted-foreground">Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="seu@email.com"
                            className="border border-input bg-background rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-ring"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-muted-foreground">Senha</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="sua senha"
                            className="border border-input bg-background rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-ring"
                        />
                    </div>

                    <Button className="bg-gray-300 w-20 mx-auto cursor-pointer rounded-sm py-2 text-sm font-medium hover:bg-gray-400">
                        Entrar
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                        Não tem conta?{" "}
                        <Link to="/register" className="text-foreground underline hover:text-gray-500 underline-offset-4">
                            Cadastrar
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    )
}