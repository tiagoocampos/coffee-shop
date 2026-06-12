export class CreateCategoryError extends Error {
    public statusCode: number = 400
    constructor() {
        super("Erro ao criar categoria");
        this.name = "CreateCategoryError";
        Object.setPrototypeOf(this, CreateCategoryError.prototype);
    }
}

export class ListCategoriesError extends Error {
    public statusCode: number = 400
    constructor() {
        super("Erro ao listar categorias");
        this.name = "ListCategoriesError";
        Object.setPrototypeOf(this, ListCategoriesError.prototype);
    }
}