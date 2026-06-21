interface RemoveItemOrderServiceProps {
    item_id: string;
}
declare class RemoveItemOrderService {
    execute({ item_id }: RemoveItemOrderServiceProps): Promise<{
        message: string;
    }>;
}
export { RemoveItemOrderService };
//# sourceMappingURL=RemoveItemOrderService.d.ts.map