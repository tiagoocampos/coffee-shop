import { DeleteOrderService } from "../../services/order/DeleteOrderService.js";
class DeleteOrderController {
    async handle(req, res) {
        const order_id = req.query?.order_id;
        const deleteOrder = new DeleteOrderService;
        const order = await deleteOrder.execute({ order_id: order_id });
        return res.json(order);
    }
}
export { DeleteOrderController };
//# sourceMappingURL=DeleteOrderController.js.map