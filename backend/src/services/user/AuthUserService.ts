import prismaClient from "../../prisma/index.js";

interface AuthUserProps{
    email: string;
    password: string;
}

class AuthUserService{
    async execute({ email, password}: AuthUserProps){
        const userExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        });

        return "Logado com sucesso";
    }
}

export { AuthUserService };