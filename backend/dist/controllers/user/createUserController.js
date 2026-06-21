import { CreateUserService } from '../../services/user/CreateUserService.js';
class CreateUserController {
    async handle(req, res) {
        const { name, email, password } = req.body;
        const createUserService = new CreateUserService();
        const user = await createUserService.execute({
            name: name,
            email: email,
            password: password
        });
        return res.json(user);
    }
}
export { CreateUserController };
//# sourceMappingURL=createUserController.js.map