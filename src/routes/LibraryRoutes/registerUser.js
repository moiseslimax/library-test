const bcrypt = require('bcrypt')

const validateUser = require('../../utils/validators/user/validateUserParams')
const User = require('../../../models/User')
const { generateToken } = require('../../utils/helpers/tokenHelper')

/**
 * @description Rota de registrar usuario
 *
 * @returns {Object} FeedBack
 */

module.exports = async (req, res) => {
    let body = req.body

    const { errors } = validateUser(body)

    if (Object.keys(errors).length >= 1) {
        return res.status(400).send({ success: false, errors })
    }

    const alreadyExists = await User.findOne({ email: body.email })

    if (alreadyExists) {
        return res
            .status(401)
            .send({ success: false, message: 'Usuário ja existente' })
    }

    body.password = await bcrypt.hash(body.password, 12)

    const newUser = new User(body)

    const user = await newUser.save()

    const token = generateToken(user)

    return res.send({
        success: true,
        auth: token,
    })
}