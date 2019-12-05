import { loginUser } from '../controllers/users/userController';

export const userRoute = (app) => {
    app.route('/users/login')
        .post(loginUser);
};