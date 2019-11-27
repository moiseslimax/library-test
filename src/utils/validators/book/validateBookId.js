module.exports = body => {
    let errors = {}

    if (!body.id) errors.id = 'id cant not be empty'

    return {
        errors,
    }
}
