import mongoose from 'mongoose';
import { UserSchema } from "../../models/userModel";
import jsonwebtoken from 'jsonwebtoken';

const User = mongoose.model('User', UserSchema);

export const updateUser = (req, res) => {
    User.findOneAndUpdate({
        uuid: req.params.userUID
    }, req.body, { new: true }, (error, user) => {
        if (error) {
            res.status(400).send(error);
        }
        res.status(200).json(user);
    });
};