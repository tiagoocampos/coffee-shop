import { z } from "zod";
export declare const CreateProductSchema: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        description: z.ZodString;
        price: z.ZodString;
        category_id: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const ListProductsSchema: z.ZodObject<{
    query: z.ZodObject<{
        disabled: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const ListProductsByCategorySchema: z.ZodObject<{
    query: z.ZodObject<{
        category_id: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=productSchema.d.ts.map