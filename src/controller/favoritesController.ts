import { Request, Response } from 'express';
import * as FavoriteService from '../service/favoriteService';

export const addFavoriteController = async (req: Request, res: Response) => {
    try {
        const { userId, ticketId } = req.body;
        const favorite = await FavoriteService.addFavorite(userId, ticketId);
        res.status(201).json({ message: 'Favorite added successfully', favorite });
    } catch (error) {
        console.error('Error adding favorite: ', error);
        res.status(500).json({ error });
    }
};

export const removeFavoriteController = async (req: Request, res: Response) => {
    try {
        const { userId, ticketId } = req.body;
        await FavoriteService.removeFavorite(userId, ticketId);
        res.status(200).json({ message: 'Favorite removed successfully' });
    } catch (error) {
        console.error('Error removing favorite: ', error);
        res.status(500).json({ error });
    }
};

export const getFavoritesByUserController = async (req: Request, res: Response) => {
    try {
        const userId = parseInt(req.params.userId);
        const favorites = await FavoriteService.getFavoritesByUserId(userId);
        res.status(200).json(favorites);
    } catch (error) {
        console.error('Error fetching favorites: ', error);
        res.status(500).json({ error });
    }
};
