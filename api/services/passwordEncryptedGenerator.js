import Sha256 from 'crypto-js/sha256';

/**
 * Return the default password encrypted, defined on the .env file
 * OR
 * Return the string encrypted
 * @param passToEncrypt
 * @returns {*}
 */
export const generateEncryptedGenerator = (passToEncrypt) => {
    let password;

    if (passToEncrypt !== null) {
        return password = Sha256(passToEncrypt);
    } else {
        return password = Sha256(process.env.PASSWORD_ENCRYPTED_FAKER);
    }
};