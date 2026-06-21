import { CreateOrderService } from "../../services/order/CreateOrderService.js";
class CreateOrderController {
    async handle(req, res) {
        const { table, name } = req.body;
        const createOrderService = new CreateOrderService();
        const order = await createOrderService.execute({
            table: Number(table),
            name,
        });
        return res.status(201).json(order);
    }
}
export { CreateOrderController };
//# sourceMappingURL=CreateOrderController.js.map