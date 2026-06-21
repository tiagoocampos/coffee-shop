import { SendOrderService } from '../../services/order/SendOrderService.js';
class SendOrderController {
    async handle(req, res) {
        const { order_id, name } = req.body;
        const sendOrder = new SendOrderService();
        const order = await sendOrder.execute({ order_id: order_id, name: name });
        return res.status(200).json(order);
    }
}
export { SendOrderController };
//# sourceMappingURL=SendOrderController.js.map