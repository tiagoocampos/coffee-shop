interface ListOrdersServiceProps {
    draft?: string;
}
declare class ListOrdersService {
    execute({ draft }: ListOrdersServiceProps): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        items: {
            id: string;
            product: {
                name: string;
                id: string;
                price: number;
                description: string;
                banner: string;
            };
            amount: number;
        }[];
        table: number;
        status: boolean;
        draft: boolean;
    }[]>;
}
export { ListOrdersService };
//# sourceMappingURL=ListOrdersService.d.ts.map