import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.get('/test', (req: Request, res: Response) => {
    res.send('Hello World! i am ...');
});

export default app;