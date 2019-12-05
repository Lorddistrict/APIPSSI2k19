import tokenGenerator from 'uuid-token-generator';

export const generateToken = () => {
    let token = new tokenGenerator();

    return token.generate();
};