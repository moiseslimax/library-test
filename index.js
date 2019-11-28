const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config({ encoding: 'utf8' })

const app = express()

app.use(cors())

app.use(bodyParser.json())

app.use('/', require('./src/routes'))

const port = process.env.PORT || 5000
app.on('ready', () => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
})

mongoose.connect(process.env.BACKEND_DB_HOST, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true,
})
mongoose.connection.once('open', () => {
    console.log('Database running successfully!')
    app.emit('ready')
})
mongoose.connection.on(
    'error',
    console.error.bind(console, 'connection error:')
)
module.exports = app
