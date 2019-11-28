const { model, Schema } = require('mongoose')

const BookSchema = new Schema({
    title: String,
    ISBN: String,
    category: String,
    year: Number,
})

module.exports = model('Book', BookSchema)
