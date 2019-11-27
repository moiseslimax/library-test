module.exports = book => {
    let errors = {}

    if (!book.name) errors.name = 'name cant not be empty'
    if (!book.age) errors.age = 'age cant not be empty'
    if (!book.phone) errors.phone = 'phone cant not be empty'
    if (!book.email) errors.email = 'email cant not be empty'
    if (!book.password) errors.password = 'password cant not be empty'

    return {
        errors,
    }
}
