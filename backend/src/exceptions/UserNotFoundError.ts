export class UserNotFoundError extends Error {
    public statusCode: number = 404
    constructor() {
        super("Usuário sem permissão");
        this.name = "UserNotFoundError";
        Object.setPrototypeOf(this, UserNotFoundError.prototype);
    }
}