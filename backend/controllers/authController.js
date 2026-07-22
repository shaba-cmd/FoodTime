const { body, validationResult } = require('express-validator');
const userModel = require('../models/userModel');
const { hashPassword, comparePassword } = require('../utils/hash');
const { generateToken } = require('../utils/jwt');

const registerValidation = [
    body('name').trim().notEmpty(),
    body('username').trim().notEmpty(),
    body('password').isLength({ min: 6 })
];

const loginValidation = [
    body('username').trim().notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required')
];

const register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, username, password } = req.body;

    try {
        const existingUser = await userModel.getUserByUsername(username);
        if (existingUser) {
            return res.status(409).json({ message: 'Username already exists' });
        }

        const hashedPassword = await hashPassword(password);
        const userId = await userModel.createUser(name, username, hashedPassword);

        const token = generateToken({ id: userId, username, role: 'user' });
        res.status(201).json({ token, user: { id: userId, name, username, role: 'user' } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    try {
        const user = await userModel.getUserByUsername(username);
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const isValid = await comparePassword(password, user.password);
        if (!isValid) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const token = generateToken({ id: user.id, username: user.username, role: user.role });
        res.json({ 
            token, 
            user: { 
                id: user.id, 
                name: user.name, 
                username: user.username, 
                role: user.role 
            } 
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getMe = async (req, res) => {
    try {
        const user = await userModel.getUserById(req.user.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { register, login, getMe, registerValidation, loginValidation };
