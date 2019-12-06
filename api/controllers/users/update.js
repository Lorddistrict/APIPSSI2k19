import mongoose from 'mongoose';
import { UserSchema } from "../../models/userModel";
import jwt from 'jsonwebtoken';

const User = mongoose.model('User', UserSchema);

export const updateUser = (req, res) => {
    User.findOneAndUpdate({
        uuid: req.params.userUID
    }, req.body, { new: true }, (error, user) => {
        if (error) {
            res.status(400);

            return res.json({
                status: '400',
                message: 'User not found',
                user: user,
            });
        } else {
            res.status(200);

            return res.json({
                status: '200',
                message: 'User updated !',
                user: user,
            });
        }
    });
};