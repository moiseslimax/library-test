const { model, Schema } = require('mongoose')

const BookSchema = new Schema({
    title: String,
    ISBN: String,
    category: String,
    year: String,
})

module.exports = model('Book', BookSchema)
