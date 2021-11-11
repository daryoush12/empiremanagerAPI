const express = require('express')
const port = '5000'
const api = express()
const cors = require('cors')
const routes = require('./Routes')
const config = require('./Config')

api.use(express.json())
api.use(routes)
api.use(cors)

api.listen(config.port, () => {
    console.log(`API listening at http://localhost:${port}`)
})

module.exports = api