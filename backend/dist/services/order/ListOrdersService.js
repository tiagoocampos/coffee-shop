import prismaClient from "../../prisma/index.js";
class ListOrdersService {
    async execute({ draft }) {
        const orders = await prismaClient.order.findMany({
            where: {
                draft: draft === "true" ? true : false,
            },
            select: {
                id: true,
                table: true,
                status: true,
                draft: true,
                name: true,
                createdAt: true,
                items: {
                    select: {
                        id: true,
                        amount: true,
                        product: {
                            select: {
                                id: true,
                                name: true,
                                price: true,
                                description: true,
                                banner: true,
                            }
                        }
                    }
                }
            },
        });
        return orders;
    }
}
export { ListOrdersService };
//# sourceMappingURL=ListOrdersService.js.map