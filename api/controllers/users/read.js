import mongoose from 'mongoose';
import { UserSchema } from "../../models/userModel";

const User = mongoose.model('User', UserSchema);

export const findUsers = (req, res) => {
    User.find({}, (error, user) => {
        if (error) {
            res.status(404).send(error);
        }
        res.status(200).json(user);
    });
};