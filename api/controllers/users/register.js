import mongoose from 'mongoose';
import { UserSchema } from "../../models/userModel";
import jsonwebtoken from 'jsonwebtoken';

const User = mongoose.model('User', UserSchema);

export const registerUser = (req, res) => {

};