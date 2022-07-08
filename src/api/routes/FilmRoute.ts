import {Request, Response, Router} from 'express';
import * as controller from '../controllers/FilmController';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    res.send(await controller.getAll());
});
router.get('/:id', async (req: Request, res: Response) => {
    try {
        res.send(await controller.getById(parseInt(req.params.id)));
    } catch (error) {
        res.end();
        console.log(error);
    };
});
router.post('/', async (req: Request, res: Response) => {
    res.status(201).send(await controller.create(req.body));
});
router.put('/:id', async (req: Request, res: Response) => {
    res.send(await controller.updateById(parseInt(req.params.id), req.body));
});
router.delete('/:id', async (req: Request, res: Response) => {
    await controller.deleteById(parseInt(req.params.id));
    res.status(204).send();
});

export default router;