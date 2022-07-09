import express, {Express, NextFunction, Request, Response} from 'express';
import * as bodyParser from 'body-parser';

import connection from './database/sequelize';
import routes from './api/routes/index';
import AppError from './utils/AppError';

const app: Express = express();
const port: number = 3333;

app.use(bodyParser.json());

app.use('/api/v1', routes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello');
});

app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(err.getHttpCode()).send(err.getError());
});

app.listen(port, () => console.log(`Server running on port: ${port}`));

connection();