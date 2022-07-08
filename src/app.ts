import express, {Express, Request, Response} from 'express';
import connection from './database/sequelize';
import * as bodyParser from 'body-parser';
import routes from './api/routes/index';

const app: Express = express();
const port: number = 3333;

app.use(bodyParser.json());

app.use('/api/v1', routes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello');
});

app.listen(port, () => console.log(`Server running on port: ${port}`));

connection();