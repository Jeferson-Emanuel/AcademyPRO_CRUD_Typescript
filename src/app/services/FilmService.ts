import * as repository from '../repositories/FilmRepository';

export const getAll = () => {
    return repository.getAll()
};
export const getById = (id: number) => {
    return repository.getById(id);
};
export const create = (object: undefined) => {
    return repository.create(object);
};