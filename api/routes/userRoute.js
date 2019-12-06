import { loginUser, createUser } from '../controllers/users/userController';

export const userRoute = (app) => {
    app.route('/users/login')
        .post(loginUser);
    app.route('/users/create')
        .post(createUser);
};