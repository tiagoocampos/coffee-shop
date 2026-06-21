import { ListProductsByCategoryService } from "../../services/product/ListProductsByCategoryService.js";
export class ListProductsByCategoryController {
    async handle(req, res) {
        const category_id = req.query.category_id;
        const listProductsByCategoryService = new ListProductsByCategoryService();
        const products = await listProductsByCategoryService.execute({ category_id: category_id });
        return res.json(products);
    }
}
//# sourceMappingURL=ListProductsByCategoryController.js.map