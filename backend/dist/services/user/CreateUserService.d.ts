interface CreateUserProps {
    name: string;
    email: string;
    password: string;
}
declare class CreateUserService {
    execute({ name, email, password }: CreateUserProps): Promise<{
        name: string;
        email: string;
        id: string;
        role: import("../../generated/prisma/enums.js").Role;
        createdAt: Date;
    }>;
}
export { CreateUserService };
//# sourceMappingURL=CreateUserService.d.ts.map