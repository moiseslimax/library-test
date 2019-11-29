const validateId = require('../../utils/validators/book/validateBookId')
const User = require('../../../models/User')

/**
 * @description Consulta usuário por ID
 * @memberof /users
 * @param {*} req
 * @param {*} res
 * @returns {Object} user
 */

module.exports = async (req, res) => {
    let body = req.query

    const { errors } = validateId(body)

    if (Object.keys(errors).length >= 1) {
        return res.status(400).send({ success: false, errors })
    }

    let user = await User.findById(body.id).catch(err => {
        return undefined
    })

    if (!user) {
        return res.status(404).send({
            success: false,
            message: 'Nenhum usuario encontrado com esse id',
        })
    } else {
        user.password = undefined
        return res.status(200).send({
            success: true,
            user,
        })
    }
}
