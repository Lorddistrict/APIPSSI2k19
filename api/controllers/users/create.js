import mongoose from 'mongoose';
import { UserSchema } from "../../models/userModel";
import jsonwebtoken from 'jsonwebtoken';

const User = mongoose.model('User', UserSchema);

export const createUser = (req, res) => {
    let user = new User(req.body);

    jsonwebtoken.sign({
        user: user,
    }, 'secret', (err, token) => {
        res.json({
            token: token,
        })
    });

    user.save((error, user) => {
        if (error) {
            res.status(400).send(error);
        }
        res.status(201).json(user);
    });
};