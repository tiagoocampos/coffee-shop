import { DeleteProductError } from "../../exceptions/ProductErrors.js";
import prismaClient from "../../prisma/index.js";
class DeleteProductService {
    async execute({ product_id }) {
        try {
            await prismaClient.product.update({
                where: {
                    id: product_id,
                },
                data: {
                    disabled: true
                }
            });
            return { message: "Produto deletado/arquivado com sucesso" };
        }
        catch (error) {
            console.log(error);
            throw new DeleteProductError();
        }
    }
}
export { DeleteProductService };
//# sourceMappingURL=DeleteProductService.js.map