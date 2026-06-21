declare class DetailUserService {
    execute(user_id: string): Promise<{
        name: string;
        email: string;
        id: string;
        role: import("../../generated/prisma/enums.js").Role;
        createdAt: Date;
    }>;
}
export { DetailUserService };
//# sourceMappingURL=DetailUserService.d.ts.map