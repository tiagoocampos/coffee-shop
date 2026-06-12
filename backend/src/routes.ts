import { Request, Response, Router } from 'express';
import { CreateUserController } from './controllers/user/createUserController.js';
import { validateSchema } from './middlewares/validateSchema.js';
import { createUserSchema, authUserSchema } from './schemas/userSchema.js';
import { AuthUserController } from './controllers/user/AuthUserController.js';
import { DetailUserController } from './controllers/user/DetailUserController.js';
import { isAuthenticated } from './middlewares/IsAuthenticated.js';
import { CreateCategoryController } from './controllers/category/CreateCategoryController.js';
import { isAdmin } from './middlewares/IsAdmin.js';
import { CreateCategorySchema } from './schemas/categorySchema.js';
import { ListCategoriesController } from './controllers/category/ListCategoriesController.js';



const router = Router();

router.post("/users", validateSchema(createUserSchema), new CreateUserController().handle)
router.post("/session", validateSchema(authUserSchema), new AuthUserController().handle)
router.get("/me", isAuthenticated, new DetailUserController().handle)

router.get("/category", isAuthenticated, new ListCategoriesController().handle);

router.post("/category", isAuthenticated, isAdmin, validateSchema(CreateCategorySchema), new CreateCategoryController().handle);


export { router };
