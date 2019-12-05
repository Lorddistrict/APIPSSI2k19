import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    uuid: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    created_at: {
       type: Date,
        default: Date.now()
    }
});