import { z } from "zod";

export const createUserSchema = z.object({
    body: z.object({
        name: z
    .string( {message: "O nome deve ser do tipo texto"})
    .min(3, { message: "O nome deve ter no mínimo 3 caracteres" }),
    email: z.email({message: "O email deve ser válido"}),
    password: z
    .string( {message: "A senha deve ser do tipo texto"})
    .min(6, { message: "A senha deve conter no mínimo 6 caracteres"})
    })
    
})

export const authUserSchema = z.object({
    body: z.object({
        email: z.email({message: "O email deve ser válido"}),
        password: z
        .string({ message: "A senha é obrigatória"})
        .min(1, { message: "A senha é obrigatória"}),
    })
})