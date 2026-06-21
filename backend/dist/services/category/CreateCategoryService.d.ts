interface CreateCategoryProps {
    name: string;
}
declare class CreateCategoryService {
    execute({ name }: CreateCategoryProps): Promise<{
        name: string;
        id: string;
        createdAt: Date;
    }>;
}
export { CreateCategoryService };
//# sourceMappingURL=CreateCategoryService.d.ts.map