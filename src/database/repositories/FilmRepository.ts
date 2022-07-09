import AppError from '../../utils/AppError';
import model, { FilmInput, FilmOutput } from '../models/FilmModel';

export const getAll = async (): Promise<FilmOutput[]> => {
    return await model.findAll();
};
export const getById = async (id: number): Promise<FilmOutput> => {
    const film = await model.findByPk(id);
    
    if(!film){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    return film;
}
export const create = async (payload: FilmInput): Promise<FilmOutput> => {
    return await model.create(payload);
}
export const updateById = async (id: number, payload: FilmInput): Promise<FilmOutput> => {
    const film = await model.findByPk(id);

    if(!film){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    return await film.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
    const film = await model.findByPk(id);

    if(!film){
        throw new AppError('NotFoundError', 'Register not found.', 404);
    }
    await film.destroy();
};