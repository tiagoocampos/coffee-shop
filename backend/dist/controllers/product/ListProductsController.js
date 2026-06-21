import { ListProductsService } from "../../services/product/ListProductsService.js";
export class ListProductsController {
    async handle(req, res) {
        const disabled = req.query.disabled;
        console.log(typeof disabled);
        const listProductsService = new ListProductsService();
        const products = await listProductsService.execute({ disabled: disabled });
        return res.json(products);
    }
}
//# sourceMappingURL=ListProductsController.js.map