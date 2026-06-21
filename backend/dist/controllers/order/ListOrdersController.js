import { ListOrdersService } from "../../services/order/ListOrdersService.js";
class ListOrdersController {
    async handle(req, res) {
        const draft = req.query?.draft;
        const listOrders = new ListOrdersService();
        const orders = await listOrders.execute({ draft: draft });
        return res.status(200).json(orders);
    }
}
export { ListOrdersController };
//# sourceMappingURL=ListOrdersController.js.map