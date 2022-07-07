import {Request, Response, Router} from 'express';
import * as service from '../services/FilmService';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    res.send(await service.getAll());
});
router.get('/:id', async (req: Request, res: Response) => {
    res.send(await service.getById(parseInt(req.params.id)));
});
router.post('/', async (req: Request, res: Response) => {
    res.status(201).send(await service.create(req.body));
});
router.put('/:id', async (req: Request, res: Response) => {
    res.send(await service.updateById(parseInt(req.params.id), req.body));
});
router.delete('/:id', async (req: Request, res: Response) => {
    await service.deleteById(parseInt(req.params.id));
    res.status(204).send();
});

export default router;