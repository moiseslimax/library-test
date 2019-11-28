const bcrypt = require('bcrypt')

const validateSignIn = require('../../utils/validators/library/validateSignIn')
const User = require('../../../models/User')
const { generateToken } = require('../../utils/helpers/tokenHelper')

/**
 * @description Rota de fazer login
 *
 * @returns {Object} FeedBack
 */

module.exports = async (req, res) => {
    let body = req.body

    const { errors } = validateSignIn(body)

    if (Object.keys(errors).length >= 1) {
        return res.status(400).send({ success: false, errors })
    }

    const user = await User.findOne({ email: body.email })

    if (!user) {
        return res.status(404).send({
            success: false,
            message: 'Nenhum usuario encontrado com esse email',
        })
    }

    const match = await bcrypt.compare(body.password, user.password)

    if (!match) {
        return res.status(401).send({
            success: false,
            message: 'Senha incorreta!',
        })
    }

    const token = generateToken(user)

    return res.send({
        success: true,
        auth: token,
    })
}
