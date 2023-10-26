import {Request, Response } from 'express';
import Movie from '../models/movie';

export const getMovies = async (req: Request, res: Response) => {
        const listMovies = await Movie.findAll()
    res.json(listMovies)
}

export const getMovie = async (req: Request, res: Response) => {
    const {ID} = req.params;
    const film = await Movie.findByPk(ID);

    if(film){
        res.json(film)
    }
    else {
        res.status(404).json({
            msg: `No existe una pelicula con el id ${ID}`
        })
    }

}

export const deleteMovie = async (req: Request, res: Response) => {
    const {ID} = req.params;
    const film = await Movie.findByPk(ID);
    if(!film){
        res.status(404).json({
            msg: `Error al eliminar la pelicula ${ID}`
        })
    }
    else {
        await Movie.destroy();
        res.json({
            msg: `La pelicula fue eliminada`
        })
    }
}

export const saveMovie = async (req: Request, res: Response) => {
    const {body} = req;
    try {
        await Movie.create(body);
        res.json({
            msg: 'La pelicula fue agregada correctamente'
        }) 
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al cargar la pelicula'
        }) 
    }    
}

export const updateMovie = async (req: Request, res: Response) => {
    const {body} = req;
    const { id } = req.params;
    const film = await Movie.findByPk(id);
    try {
        const film = await Movie.findByPk(id);
        
        if(film){
            await film.update(body);
    
            res.json({
                msg: `La pelicula fue actualizada`
            })        
        }
        else {
            res.status(404).json({
                msg: `Error al actualizar la pelicula ${id}`
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Hubo un error al actualizar la pelicula'
        }) 
    }    
}