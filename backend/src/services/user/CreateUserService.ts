class CreateUserService{
    async execute(){
        console.log('Executando service de criação de usuário');
        return 'Usuário criado';
    }
}

export { CreateUserService }