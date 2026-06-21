import { DetailOrderService } from "../../services/order/DetailOrderService.js";
class DetailOrderController {
    async handle(req, res) {
        const order_id = req.query.order_id;
        const detailOrderService = new DetailOrderService();
        const details = await detailOrderService.execute({ order_id });
        return res.status(200).json(details);
    }
}
export { DetailOrderController };
//# sourceMappingURL=DetailOrderController.js.map