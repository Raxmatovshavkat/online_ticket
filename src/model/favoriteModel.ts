import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

class Favorite extends Model { }

Favorite.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        ticketId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Favorite',
        tableName: 'favorites',
        timestamps: true,
        paranoid: true,
        underscored: true,
    }
);

export default Favorite;
