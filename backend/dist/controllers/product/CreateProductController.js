import { CreateProductService } from '../../services/product/CreateProductService.js';
export class CreateProductController {
    async handle(req, res) {
        const { name, price, description, category_id } = req.body;
        if (!req.file) {
            throw new Error("A imagem do produto é obrigatória");
        }
        const createProductService = new CreateProductService();
        const product = await createProductService.execute({
            name: name,
            price: parseInt(price),
            description: description,
            category_id: category_id,
            imageBuffer: req.file.buffer,
            imageName: req.file.originalname
        });
        return res.json(product);
    }
}
//# sourceMappingURL=CreateProductController.js.map