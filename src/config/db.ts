import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DIALECT } = process.env;

const sequelize = new Sequelize(DB_NAME!, DB_USER!, DB_PASSWORD!, {
    host: DB_HOST,
    port: Number(DB_PORT),
    dialect: DIALECT as any,
    logging: false,
});

export default sequelize;
