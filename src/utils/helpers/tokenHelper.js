const jwt = require('jsonwebtoken')

/**
 * @description Gera token JWT baseado em secretkey
 * @param {Object} user
 * @returns {String} TokenJWT
 */
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

/**
 * @description Valida token JWT
 * @param {String} req.header
 * @param {Function} next
 * @param {Function} res
 * @returns {Function} next()
 */
function checkAuth(req, res, next) {
    const authHeader = req.header('Authorization')

    if (authHeader) {
        const token = authHeader.split('Bearer ')[1]

        if (token) {
            try {
                jwt.verify(token, process.env.SECRET_KEY)
                next()
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
