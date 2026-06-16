import { z } from "zod";

export const CreateOrderSchema = z.object({
  body: z.object({
    table: z.number({ message: "A mesa é obrigatória"}).int().positive(),
    name: z.string().min(1, { message: "O nome do cliente é obrigatório" }),
  }),
});

