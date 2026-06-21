interface DeleteOrderProps {
    order_id: string;
}
declare class DeleteOrderService {
    execute({ order_id }: DeleteOrderProps): Promise<{
        message: string;
    }>;
}
export { DeleteOrderService };
//# sourceMappingURL=DeleteOrderService.d.ts.map