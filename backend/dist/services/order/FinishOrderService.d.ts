interface FinishOrderProps {
    order_id: string;
}
declare class FinishOrderService {
    execute({ order_id }: FinishOrderProps): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        table: number;
        status: boolean;
        draft: boolean;
    }>;
}
export { FinishOrderService };
//# sourceMappingURL=FinishOrderService.d.ts.map