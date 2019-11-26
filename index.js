const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

//Carregando variaveis de ambiente
require('dotenv').config({ encoding: 'utf8' })

//Carregando o Express
const app = express()

//Registrando CORS
app.use(cors())

//Registrando um parser de JSON
app.use(bodyParser.json())

app.use('/', require('./src/routes')) //Rotas

//Para prevenir erros nos testes
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log('Server ativo na porta:', process.env.PORT)
})

module.exports = app
