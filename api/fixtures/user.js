import mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';
import { generateToken } from '../services/tokenGenerator';
import { generateEncryptedGenerator } from "../services/passwordEncryptedGenerator";
import faker from 'faker';

const User = mongoose.model('User', UserSchema);

export const generateFakeUsers = () => {
    faker.locale = "fr";

    // Generate test user
    let dummyUser = new User();

    dummyUser.uuid = generateToken();
    dummyUser.email = 'user@user.com';
    dummyUser.password = generateEncryptedGenerator();
    dummyUser.role = 'USER';
    dummyUser.save();

    // Generate test admin
    let dummyAdmin = new User();

    dummyAdmin.uuid = generateToken();
    dummyAdmin.email = 'admin@admin.com';
    dummyAdmin.password = generateEncryptedGenerator();
    dummyAdmin.role = 'ADMIN';
    dummyAdmin.save();

    for (let i = 0; i < 2; i++) {
        let user = new User();

        user.uuid = generateToken();
        user.email = faker.internet.email();
        user.password = generateEncryptedGenerator();
        user.role = 'USER';
        user.save();
    }
};