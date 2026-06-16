import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { UserAlreadyExistsError } from '../exceptions/UserAlreadyExistsError.js';
import { PasswordNotMatchError } from '../exceptions/passwordNotMatch.js';
import { UserNotFoundError } from '../exceptions/UserNotFoundError.js';
import { InvalidToken } from '../exceptions/InvalidToken.js';
import { CategoryNotFoundError, CreateCategoryError, ListCategoriesError } from '../exceptions/CategoryErrors.js';
import { DeleteProductError, ListProductsError } from '../exceptions/ProductErrors.js';
import { CreateOrderError } from '../exceptions/OrdersErrors.js';

export const errorHandler = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (error instanceof ZodError) {
        return res.status(400).json({
            error: "Erro de validação",
            details: error.issues.map(issue => ({
                message: issue.message,
            })),
        });
    }

    if (error instanceof UserAlreadyExistsError) {
        return res.status(error.statusCode).json({
            error: error.message,
        });
    }

    if (error instanceof PasswordNotMatchError){
        return res.status(error.statusCode).json({
            error: error.message,
        });
    }

    if (error instanceof UserNotFoundError){
        return res.status(error.statusCode).json({
            error: error.message,
        });
    }

    if(error instanceof InvalidToken){
        return res.status(error.statusCode).json({
            error: error.message,
        });
    }

    if(error instanceof CreateCategoryError){
        return res.status(error.statusCode).json({
            error: error.message,
        });
    }

    if(error instanceof ListCategoriesError){
        return res.status(error.statusCode).json({
            error: error.message,
        });
    }

    if(error instanceof CategoryNotFoundError){
        return res.status(error.statusCode).json({
            error: error.message,
        })
    }

    if(error instanceof ListProductsError){
        return res.status(error.statusCode).json({
            error: error.message,
        })
    }

    if(error instanceof DeleteProductError){
        return res.status(error.statusCode).json({
            error: error.message,
        })
    }

    if(error instanceof CreateOrderError){
        return res.status(error.statusCode).json({
            error: error.message,
        })
    }

    return res.status(500).json({ error: "Erro interno" });
};