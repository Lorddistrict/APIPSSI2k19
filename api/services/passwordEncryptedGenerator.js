import Sha256 from 'crypto-js/sha256';

export const generateEncryptedGenerator = () => {
    let password;

    return password = Sha256(process.env.PASSWORD_ENCRYPTED_FAKER);
};