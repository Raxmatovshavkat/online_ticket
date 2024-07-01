import Favorite from '../model/favoriteModel';

export const addFavorite = async (userId: number, ticketId: number) => {
    try {
        const existingFavorite = await Favorite.findOne({ where: { userId, ticketId } });

        if (existingFavorite) {
            throw new Error('Ticket already in favorites');
        }

        const favorite = await Favorite.create({ userId, ticketId });
        return favorite;
    } catch (error) {
        throw new Error('Failed to add favorite');
    }
};

export const removeFavorite = async (userId: number, ticketId: number) => {
    try {
        const favorite = await Favorite.findOne({ where: { userId, ticketId } });

        if (!favorite) {
            throw new Error('Favorite not found');
        }

        await favorite.destroy();
    } catch (error) {
        throw new Error('Failed to remove favorite');
    }
};

export const getFavoritesByUserId = async (userId: number) => {
    try {
        const favorites = await Favorite.findAll({ where: { userId } });
        return favorites;
    } catch (error) {
        throw new Error('Failed to fetch favorites');
    }
};
