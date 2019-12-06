import mongoose from 'mongoose';
import { UserSchema } from "../../models/userModel";
import crypto from 'crypto-js';
import jwt from "jsonwebtoken";

const User = mongoose.model('User', UserSchema);

export const loginUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    User.findOne({
        email: email,
        password: crypto.SHA256(password).toString(crypto.enc.SHA256),
    })
        .then( user => {
            if (!user) {
                res.status(404);

                return res.json({
                    status: '404',
                    message: 'User cannot be found',
                    user: user,
                });
            } else {
                jwt.sign({
                    user: user
                }, process.env.JWT_SECRET_KEY, (error, token) => {
                    res.status(200);

                    return res.json({
                        status: '200',
                        message: 'User has been found',
                        user: user,
                        token: token,
                    });
                });
            }
        })
        .catch(error => {
            res.status(500);

            return res.json({
                status: '500',
                message: 'Something went wrong',
            });
        });
};