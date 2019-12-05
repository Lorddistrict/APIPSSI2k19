import mongoose from 'mongoose';
import { UserSchema } from "../../models/userModel";
import jsonwebtoken from 'jsonwebtoken';

const User = mongoose.model('User', UserSchema);

export const deleteUser = (req, res) => {
    User.remove({ uuid: req.params.userUID }, (error, user) => {
        if (error) {
            res.status(400).send(error);
        }
        res.status(200).json({
            message: 'User deleted !'
        });
    });
};