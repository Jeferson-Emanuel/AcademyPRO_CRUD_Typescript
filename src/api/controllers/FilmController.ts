import { FilmInput, FilmOutput } from '../../database/models/FilmModel';
import * as service from '../../services/FilmService';

export const getAll = async (): Promise<FilmOutput[]> => {
    return await service.getAll()
};
export const getById = async (id: number): Promise<FilmOutput> => {
    try {
        return await service.getById(id);        
    } catch (error) {
        throw error;
    };
};
export const create = async (payload: FilmInput): Promise<FilmOutput> => {
    return await service.create(payload);
};
export const updateById = async (id: number, payload: FilmInput): Promise<FilmOutput> => {
    return await service.updateById(id, payload);
};
export const deleteById = async (id: number): Promise<void> => {
    await service.deleteById(id);
}