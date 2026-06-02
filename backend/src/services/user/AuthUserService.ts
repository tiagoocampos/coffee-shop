interface AuthUserProps{
    email: string;
    password: string;
}

class AuthUserService{
    async execute({ email, password}: AuthUserProps){
        console.log({email, password});

        return "Logado com sucesso";
    }
}

export { AuthUserService };