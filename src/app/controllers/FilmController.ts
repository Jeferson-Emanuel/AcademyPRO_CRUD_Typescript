import {Request, Response, Router} from 'express';
import * as service from '../services/FilmService';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    service.getAll().then((films) => {
        res.send(films);
    });
});
router.get('/:id', (req: Request<{id: string}>, res: Response) => {
    service.getById(Number(req.params.id)).then((film) => {
        res.send(film);
    });
});
router.post('/', (req: Request, res: Response) => {
    service.create(req.body).then(() => {
        res.send('Film recorded successfully into DB.');
    });
});

export default router;