export class CreateCategoryError extends Error {
    statusCode = 400;
    constructor() {
        super("Erro ao criar categoria");
        this.name = "CreateCategoryError";
        Object.setPrototypeOf(this, CreateCategoryError.prototype);
    }
}
export class ListCategoriesError extends Error {
    statusCode = 400;
    constructor() {
        super("Erro ao listar categorias");
        this.name = "ListCategoriesError";
        Object.setPrototypeOf(this, ListCategoriesError.prototype);
    }
}
export class CategoryNotFoundError extends Error {
    statusCode = 404;
    constructor() {
        super("Categoria nao encontrada");
        this.name = "CategoryNotFoundError";
        Object.setPrototypeOf(this, CategoryNotFoundError.prototype);
    }
}
//# sourceMappingURL=CategoryErrors.js.map