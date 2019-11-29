const User = require('../../../models/User')

/**
 * @description Consulta todos os usuários da biblioteca
 * @memberof /library
 * @param {*} req
 * @param {*} res
 * @returns {Object} users
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
