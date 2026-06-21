interface DetailOrderServiceProps {
    order_id: string;
}
declare class DetailOrderService {
    execute({ order_id }: DetailOrderServiceProps): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        items: {
            id: string;
            product: {
                name: string;
                id: string;
                price: number;
                description: string;
                banner: string;
            };
            amount: number;
        }[];
        table: number;
        status: boolean;
        draft: boolean;
    }>;
}
export { DetailOrderService };
//# sourceMappingURL=DetailOrderService.d.ts.map