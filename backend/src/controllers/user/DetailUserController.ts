import {Request, Response} from 'express';
import { DetailUserService } from '../../services/user/DetailUserService.js';

class DetailUserController {
    async handle(req: Request, res: Response) {
        const detailUser = new DetailUserService();
        const user = await detailUser.execute("");
        return res.json(user);
    }
}

export { DetailUserController }