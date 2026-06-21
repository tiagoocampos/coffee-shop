interface CreateProductServiceProps {
    name: string;
    price: number;
    description: string;
    category_id: string;
    imageBuffer: Buffer;
    imageName: string;
}
declare class CreateProductService {
    execute({ name, price, description, category_id, imageBuffer, imageName }: CreateProductServiceProps): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        price: number;
        description: string;
        category_id: string;
        banner: string;
    }>;
}
export { CreateProductService };
//# sourceMappingURL=CreateProductService.d.ts.map