const bcrypt = require('bcrypt')

const validateUpdateUser = require('../../utils/validators/user/validateUpdateUser')
const User = require('../../../models/User')

/**
 * @description Rota de adicionar livros favoritos
 *
 * @returns {Object} FeedBack
 */

module.exports = async (req, res) => {
    let body = req.body

    const { errors } = validateUpdateUser(body)

    if (Object.keys(errors).length >= 1) {
        return res.status(400).send({ success: false, errors })
    }

    let userAuth = req.header('Authorization')

    let user = await User.findByIdAndUpdate(body.id, body.updateParams, {
        new: true,
    }).catch(err => {
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
