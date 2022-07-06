import express, {Express, Request, Response} from 'express';
import connection from './database/sequelize';
import * as bodyParser from 'body-parser';

import films from './app/controllers/FilmController';

const app: Express = express();
const port: number = 4444;

app.use(bodyParser.json());
app.use('/films', films);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello');
});


app.listen(port, () => console.log(`Server running on port: ${port}`));

connection();