import model from '../models/FilmModel';

export const getAll = () => {
    return model.findAll();
};
export const getById = (id: number) => {
    return model.findByPk(id);
}
export const create = (object: undefined) => {
    return model.create(object);
}
/* export const update = (id: number, object: undefined) => {
    return model.update(object, {
        where: {film_id: id}
    });
}; */