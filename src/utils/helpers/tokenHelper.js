const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../config')

function generateToken(user) {
    return jwt.sign(
        {
            id: user.id,
            email: user.email,
            name: user.name,
        },
        process.env.SECRET_KEY,
        { expiresIn: '1h' }
    )
}

function checkAuth(req, res, next) {
    const authHeader = req.header('Authorization')

    if (authHeader) {
        const token = authHeader.split('Bearer ')[1]

        if (token) {
            try {
                const user = jwt.verify(token, SECRET_KEY)
                return user
            } catch (error) {
                return res
                    .status(401)
                    .send({ success: false, message: 'Token expirado!' })
            }
        } else {
            return res.status(401).send({
                success: false,
                message: 'Authorization invalido!',
            })
        }
    } else {
        return res.status(401).send({
            success: false,
            message: 'Authorization não informado!',
        })
    }
}

module.exports = {
    generateToken,
    checkAuth,
}
