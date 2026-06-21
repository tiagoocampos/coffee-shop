interface CreateOrderServiceProps {
    table: number;
    name: string;
}
declare class CreateOrderService {
    execute({ table, name }: CreateOrderServiceProps): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        table: number;
        status: boolean;
        draft: boolean;
    }>;
}
export { CreateOrderService };
//# sourceMappingURL=CreateOrderService.d.ts.map