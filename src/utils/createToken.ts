// createToken.js

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User_Token from '../model/user_token_Model';

dotenv.config();

const accessTokenKey:any = process.env.ACCESS_TOKEN_PRIVATE_KEY;
const refreshTokenKey:any = process.env.REFRESH_TOKEN_PRIVATE_KEY;

const generateTokens = async (user:any) => {
    try {
        const payload = {
            id: user.id,
            email: user.email,
            password: user.password
        };


        const accessToken = jwt.sign(payload, accessTokenKey, { expiresIn: '15m' });
        const refreshToken = jwt.sign(payload, refreshTokenKey, { expiresIn: '10d' });

        const existingToken = await User_Token.findOne({ where: { id: user.id } });

        if (existingToken) {
            await existingToken.destroy();
        }

        await User_Token.create({
            user_id: user.id,
            token: refreshToken
        });

        return { accessToken, refreshToken };
    } catch (error) {
        console.error('Error generating tokens:');
        throw new Error('Internal Server Error');
    }
};

export default generateTokens;
