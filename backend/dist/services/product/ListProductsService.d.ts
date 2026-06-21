interface ListProductsServiceProps {
    disabled?: string;
}
declare class ListProductsService {
    execute({ disabled }: ListProductsServiceProps): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        price: number;
        description: string;
        category_id: string;
        banner: string;
        disabled: boolean;
    }[]>;
}
export { ListProductsService };
//# sourceMappingURL=ListProductsService.d.ts.map