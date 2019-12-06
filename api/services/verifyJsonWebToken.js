export const verifyToken = (req, res) => {
    // Get auth header value
    let bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        let bearer = bearerHeader.split(' ');

        bearerHeader = bearer[1];
        req.token = bearerHeader;
    } else {
        // If not bearer sent
        res.status(403);

        return res.json({
            status: '403',
            message: 'You do not have access'
        });
    }
};