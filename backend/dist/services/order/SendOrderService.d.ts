interface SendOrderProps {
    order_id: string;
    name: string;
}
declare class SendOrderService {
    execute({ order_id, name }: SendOrderProps): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        table: number;
        status: boolean;
        draft: boolean;
    }>;
}
export { SendOrderService };
//# sourceMappingURL=SendOrderService.d.ts.map