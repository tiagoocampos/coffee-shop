import prismaClient from "../../prisma/index.js";
class FinishOrderService {
    async execute({ order_id }) {
        try {
            const order = await prismaClient.order.findFirst({
                where: {
                    id: order_id
                }
            });
            if (!order) {
                throw new Error("Falha ao finalizar pedido");
            }
            const updateOrder = await prismaClient.order.update({
                where: {
                    id: order_id
                },
                data: {
                    status: true,
                },
                select: {
                    id: true,
                    table: true,
                    status: true,
                    draft: true,
                    name: true,
                    createdAt: true,
                }
            });
            return updateOrder;
        }
        catch (error) {
            throw new Error("Falha ao finalizar pedido");
        }
    }
}
export { FinishOrderService };
//# sourceMappingURL=FinishOrderService.js.map