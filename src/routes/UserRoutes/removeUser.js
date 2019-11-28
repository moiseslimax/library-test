const validateId = require('../../utils/validators/book/validateBookId')
const User = require('../../../models/User')

/**
 * @description Rota para remover dados de usuario
 *
 * @returns {Object} FeedBack
 */

module.exports = async (req, res) => {
    let body = req.body

    const { errors } = validateId(body)

    if (Object.keys(errors).length >= 1) {
        return res.status(400).send({ success: false, errors })
    }

    let user = await User.findByIdAndDelete(body.id).catch(err => {
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
