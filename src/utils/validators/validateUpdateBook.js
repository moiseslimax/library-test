module.exports = body => {
    let errors = {}

    if (!body.id) errors.id = 'id cant not be empty'

    if (Object.keys(body.updateParams).length < 1) {
        errors.updateParams = 'Update Params cant not be empty'
    }

    return {
        errors,
    }
}
