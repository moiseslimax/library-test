module.exports = book => {
    let errors = {}

    if (!book.title) errors.title = 'title cant not be empty'
    if (!book.ISBN) errors.ISBN = 'ISBN cant not be empty'
    if (!book.category) errors.category = 'category cant not be empty'
    if (!book.year) errors.year = 'year cant not be empty'

    return {
        errors,
    }
}
