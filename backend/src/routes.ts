import { Request, Response, Router } from 'express';
import { CreateUserController } from './controllers/user/createUserController.js';
import { validateSchema } from './middlewares/validateSchema.js';
import { createUserSchema, authUserSchema } from './schemas/userSchema.js';
import { AuthUserController } from './controllers/user/AuthUserController.js';


const router = Router();

router.post("/users", validateSchema(createUserSchema), new CreateUserController().handle)
router.post("/session", validateSchema(authUserSchema), new AuthUserController().handle)
export { router };