import { Request, Response } from 'express';
import { signUpService, signInService, getMeService, logoutService } from '../service/userService';

export const signUpController = async (req: Request, res: Response) => {
    try {
        const user = await signUpService(req.body);
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error: any) {
        console.error('Error during signup: ', error);
        res.status(500).json({ error: error.message });
    }
};

export const signInController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await signInService(email,password);
        res.status(200).json(user);
    } catch (error: any) {
        console.error('Error during sign-in: ', error.message);
        res.status(400).json({ error: error.message });
    }
};

export const getMeController = async (req: Request, res: Response) => {
    try {
        const user = await getMeService(req.body.id);
        res.status(200).json(user);
    } catch (error: any) {
        console.error('Error fetching user details: ', error);
        res.status(500).json({ error: error.message });
    }
};

export const logoutController = async (req: Request, res: Response) => {
    try {
        await logoutService(req.body.id);
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error: any) {
        console.error('Error during logout: ', error);
        res.status(500).json({ error: error.message });
    }
};
