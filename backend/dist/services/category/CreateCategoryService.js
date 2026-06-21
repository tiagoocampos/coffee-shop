import { CreateCategoryError } from "../../exceptions/CategoryErrors.js";
import prismaClient from "../../prisma/index.js";
class CreateCategoryService {
    async execute({ name }) {
        try {
            const category = await prismaClient.category.create({
                data: {
                    name: name
                },
                select: {
                    id: true,
                    name: true,
                    createdAt: true
                }
            });
            return category;
        }
        catch (error) {
            throw new CreateCategoryError();
        }
    }
}
export { CreateCategoryService };
//# sourceMappingURL=CreateCategoryService.js.map