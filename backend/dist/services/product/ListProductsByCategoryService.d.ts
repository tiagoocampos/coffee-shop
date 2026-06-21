interface ListProductsByCategoryServiceProps {
    category_id: string;
}
declare class ListProductsByCategoryService {
    execute({ category_id }: ListProductsByCategoryServiceProps): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        category: {
            name: string;
            id: string;
        };
        price: number;
        description: string;
        category_id: string;
        banner: string;
        disabled: boolean;
    }[]>;
}
export { ListProductsByCategoryService };
//# sourceMappingURL=ListProductsByCategoryService.d.ts.map