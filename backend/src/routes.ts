import { Request, Response, Router } from 'express';
import { CreateUserController } from './controllers/user/createUserController.js';
import { validateSchema } from './middlewares/validateSchema.js';
import { createUserSchema } from './schemas/userSchema.js';

const router = Router();

router.post("/users", validateSchema(createUserSchema), new CreateUserController().handle)

export { router };