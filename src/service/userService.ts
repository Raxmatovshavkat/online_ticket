import User from '../model/userModel.js';
import bcrypt from 'bcrypt';
import generateTokens from '../utils/createToken.js';

export const signUpService = async (data: any) => {
    const { name, lastname, phone, email, password, confirmPassword, cards } = data;

    if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        lastname,
        phone,
        email,
        password: hashedPassword,
        confirmPassword: hashedPassword,
        cards
    });

    return user;
};

export const signInService = async (email:string,password:string) => {
    try {
            const user = await User.findOne({ where: { email } });

            if (!user) {
                throw new Error('Foydalanuvchi topilmadi');
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) {
                throw new Error('Noto\'g\'ri parol');
            }

            const tokens = await generateTokens(user);

            return { user, tokens };
    } catch (error) {
        console.error('Error during sign in:');
        throw error;
    }
};

export const getMeService = async (userId: number) => {
    const user = await User.findByPk(userId);

    if (!user) {
        throw new Error("User not found");
    }

    return user;
};

export const logoutService = async (userId: number) => {
    const user = await User.findByPk(userId);

    if (!user) {
        throw new Error("User not found");
    }
    
    return user.destroy()
};
