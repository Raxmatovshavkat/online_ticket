import sequelize from "../config/db.js";
import { DataTypes, Model } from "sequelize";

class User_Token extends Model { }

User_Token.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    token: {
        type: DataTypes.TEXT,
        allowNull: false
    }

},

    {
        sequelize,
        modelName: 'Token',
        tableName: 'tokens',
        timestamps: true,
        paranoid: true,
    })
export default User_Token