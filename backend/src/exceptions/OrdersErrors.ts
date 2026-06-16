export class CreateOrderError extends Error {
    public statusCode: number = 400
    constructor() {
        super("Erro ao criar pedido");
        this.name = "CreateOrderError";
        Object.setPrototypeOf(this, CreateOrderError.prototype);
    }
}