import { createUser } from "./create";
import { deleteUser } from "./delete";
import { findUsers } from "./read";
import { updateUser } from "./update";
import { loginUser } from "./login";
import { registerUser } from "./register";

module.exports = {
    createUser: createUser,
    deleteUser: deleteUser,
    findUsers: findUsers,
    updateUser: updateUser,
    loginUser: loginUser,
    registerUser: registerUser,
};