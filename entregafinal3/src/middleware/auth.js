import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    const token = req.get('Authorization')
    if (!token) {
         res.status(403).send('El usuario no está autenticado');
         return
    }
    try {
       jwt.verify(token, process.env.SECRET);
        next();
    } catch (err) {
        return res.status(500).send(err);
    }
};


export default verifyToken;