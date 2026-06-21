export class UserNotFoundError extends Error {
    statusCode = 404;
    constructor() {
        super("Usuário não encontrado");
        this.name = "UserNotFoundError";
        Object.setPrototypeOf(this, UserNotFoundError.prototype);
    }
}
//# sourceMappingURL=UserNotFoundError.js.map