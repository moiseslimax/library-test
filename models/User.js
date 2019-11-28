const { model, Schema } = require('mongoose')

const UserSchema = new Schema({
    name: String,
    age: Number,
    phone: Number,
    email: String,
    password: String,
    favoriteBooks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Book',
        },
    ],
})

module.exports = model('User', UserSchema)
