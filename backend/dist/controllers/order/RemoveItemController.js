import { RemoveItemOrderService } from "../../services/order/RemoveItemOrderService.js";
class RemoveItemController {
    async handle(req, res) {
        const { item_id } = req.query;
        const removeItem = new RemoveItemOrderService();
        const result = await removeItem.execute({ item_id: item_id });
        return res.status(200).json(result);
    }
}
export { RemoveItemController };
//# sourceMappingURL=RemoveItemController.js.map