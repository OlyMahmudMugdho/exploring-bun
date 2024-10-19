import express from 'express'
import type { Request, Response } from 'express';
import cors from 'cors';

const PORT: number = 8080;
const app = express();

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.json({
        "message": "hello world"
    })
})

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})