const bodyParser = require('body-parser')
// const { Routes } = require('express')

module.exports = app => {
    app.use(bodyParser.json())
    app.get('/', (req, res) => {
        res.send('Rota foi acessada')
    })
}