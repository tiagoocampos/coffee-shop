interface ItemProps {
    order_id: string;
    product_id: string;
    amount: number;
}
declare class AddItemOrderService {
    execute({ order_id, product_id, amount }: ItemProps): Promise<{
        id: string;
        createdAt: Date;
        product: {
            name: string;
            id: string;
            price: number;
            description: string;
            banner: string;
        };
        product_id: string;
        amount: number;
        order_id: string;
    }>;
}
export { AddItemOrderService };
//# sourceMappingURL=AddItemOrderService.d.ts.map