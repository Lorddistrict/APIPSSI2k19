import mongoose from 'mongoose';
import { UserSchema } from "../../models/userModel";
import {verifyToken} from "../../services/verifyJsonWebToken";
import jwt from 'jsonwebtoken';
import {generateToken} from "../../services/tokenGenerator";
import {generateEncryptedGenerator} from "../../services/passwordEncryptedGenerator";

const User = mongoose.model('User', UserSchema);

export const createUser = (req, res) => {
    let user = new User(req.body);

    verifyToken(req, res);

    User.findOne({
        email: req.body.email
    })
        .then( userFound => {
            if (!userFound) {
                jwt.verify(req.token, process.env.JWT_SECRET_KEY, (error, authData) => {
                    if (error || authData.user.role !== 'ADMIN') {
                        res.status(403);

                        return res.json({
                            status: '403',
                            message: 'You do not have access',
                        })
                    } else {
                        try {
                            console.log(user);
                            user.uuid = generateToken();
                            user.role = 'USER';
                            user.password = generateEncryptedGenerator(user.password);
                            user.save();
                            res.status(201);

                            return res.json({
                                status: '201',
                                message: 'User created',
                                user: user,
                                authData: authData
                            });
                        } catch (error) {
                            res.status(400);

                            return res.json({
                                status: '400',
                                message: 'Cannot create user',
                                user: user
                            });
                        }
                    }
                });
            } else {
                res.status(403);

                return res.json({
                    status: '403',
                    message: 'This mail is already used',
                    user: userFound
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