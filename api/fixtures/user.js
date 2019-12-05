import mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';
import { generateToken } from '../services/tokenGenerator';
import { generateEncryptedGenerator } from "../services/passwordEncryptedGenerator";
import faker from 'faker';

const User = mongoose.model('User', UserSchema);

export const generateFakeUsers = () => {
    faker.locale = "fr";

    // Generate test user
    let testuser = new User();

    testuser.uuid = generateToken();
    testuser.email = 'user@user.com';
    testuser.password = generateEncryptedGenerator();
    testuser.save();

    // Generate test admin
    let testadmin = new User();

    testadmin.uuid = generateToken();
    testadmin.email = 'admin@admin.com';
    testadmin.password = generateEncryptedGenerator();
    testadmin.save();

    for (let i = 0; i < 2; i++) {
        let user = new User();

        user.uuid = generateToken();
        user.email = faker.internet.email();
        user.password = generateEncryptedGenerator();
        user.save();
    }
};