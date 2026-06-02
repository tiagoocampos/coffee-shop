import cors from 'cors';
import "dotenv/config";
import express, {  NextFunction, Request, Response } from 'express';
import { router } from './routes.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);
app.use((error: Error, req: Request, res: Response) => {
    if(error instanceof Error){
        return res.status(400).json({error: error.message});
    }

    return res.status(500).json({error: "Erro interno do servidor"});
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
})