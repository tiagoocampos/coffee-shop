declare class UpdateUserRoleAdminService {
    execute({ id, role }: {
        id: string;
        role: "STAFF" | "ADMIN";
    }): Promise<{
        name: string;
        email: string;
        id: string;
        role: import("../../../generated/prisma/enums.js").Role;
        createdAt: Date;
    }>;
}
export { UpdateUserRoleAdminService };
//# sourceMappingURL=UpdateUserRoleAdminService.d.ts.map