const User = require('../../../models/User')

/**
 * @description Rota de consultar todos os usuarios
 *
 * @returns {Object} FeedBack
 */

module.exports = async (req, res) => {
    let body = req.query

    let users = await User.find().catch(err => {
        return undefined
    })

    if (!users) {
        return res.status(404).send({
            success: false,
            message: 'Nenhum usuario encontrado',
        })
    } else {
        users.map(user => {
            user.password = undefined
        })
        return res.status(200).send({
            success: true,
            users,
        })
    }
}
