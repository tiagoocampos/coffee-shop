import { CreateOrderError } from "../../exceptions/OrdersErrors.js";
import prismaClient from "../../prisma/index.js";
class CreateOrderService {
    async execute({ table, name }) {
        try {
            const order = await prismaClient.order.create({
                data: {
                    table: table,
                    name: name ?? "",
                },
                select: {
                    id: true,
                    table: true,
                    status: true,
                    draft: true,
                    name: true,
                    createdAt: true,
                },
            });
            return order;
        }
        catch (error) {
            throw new CreateOrderError();
        }
    }
}
export { CreateOrderService };
//# sourceMappingURL=CreateOrderService.js.map