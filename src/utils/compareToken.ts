

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const compareToken = (type:any, token:any) => {
    try {
        if (!token) {
            throw new Error("jwt must be provided");
        }

        const privateKey:any = type === 'access' ? process.env.ACCESS_TOKEN_PRIVATE_KEY : process.env.REFRESH_TOKEN_PRIVATE_KEY;
        const data = jwt.verify(token, privateKey);
        return data;
    } catch (error) {
        console.error("Error in token verification:");
        throw new Error("Invalid token");
    }
};
