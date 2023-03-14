import { body } from 'express-validator';

export const registerValidator = [
  body('email').isEmail(),
  body('fullName').isLength({ min: 3 }),
  body('password').isLength({ min: 5 }),
  body('avatarUrl').optional().isURL(),
];
