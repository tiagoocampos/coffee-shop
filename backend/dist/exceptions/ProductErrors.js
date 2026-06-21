export class ListProductsError extends Error {
    statusCode = 400;
    constructor() {
        super("Erro ao listar produtos");
        this.name = "ListProductsError";
        Object.setPrototypeOf(this, ListProductsError.prototype);
    }
}
export class DeleteProductError extends Error {
    statusCode = 400;
    constructor() {
        super("Erro ao deletar produto");
        this.name = "DeleteProductError";
        Object.setPrototypeOf(this, DeleteProductError.prototype);
    }
}
//# sourceMappingURL=ProductErrors.js.map