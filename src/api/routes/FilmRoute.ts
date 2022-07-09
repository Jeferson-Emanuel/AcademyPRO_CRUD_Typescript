import {NextFunction, Request, Response, Router} from 'express';
import * as controller from '../controllers/FilmController';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    res.send(await controller.getAll());
});
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send(await controller.getById(parseInt(req.params.id)));
    } catch (error) {
        next(error);
    };
});
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(201).send(await controller.create(req.body));
    } catch (error) {
        next(error);
    };    
});
router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send(await controller.updateById(parseInt(req.params.id), req.body));        
    } catch (error) {
        next(error);
    };
});
router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller.deleteById(parseInt(req.params.id));
        res.status(204).send();
    } catch (error) {
        next(error);
    };    
});

export default router;