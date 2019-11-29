const bcrypt = require('bcrypt')

const validateLogin = require('../../utils/validators/library/validateLogin')
const User = require('../../../models/User')
const { generateToken } = require('../../utils/helpers/tokenHelper')

/**
 * @description Faz login do usuário na aplicação
 * @memberof /library
 * @param {*} req
 * @param {*} res
 * @returns {String} auth
 */

module.exports = async (req, res) => {
    let body = req.body

    const { errors } = validateLogin(body)

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
