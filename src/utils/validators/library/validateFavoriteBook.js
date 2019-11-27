module.exports = body => {
    let errors = {}

    if (!body.bookId) errors.bookId = 'bookId cant not be empty'

    return {
        errors,
    }
}
