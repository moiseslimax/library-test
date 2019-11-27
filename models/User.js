const { model, Schema } = require('mongoose')

const UserSchema = new Schema({
    name: String,
    age: String,
    phone: String,
    email: String,
    password: String,
})

module.exports = model('User', UserSchema)
