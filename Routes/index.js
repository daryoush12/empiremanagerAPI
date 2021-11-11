const express = require('express')
const router = express.Router()
const example  = require('./Example')

router.use(example)

router.get('/', (req, res) => {
    res.send({
        message: 'Welcome to the boilerplate API'
    })
})

router.get('*', (req, res) => {
    res.status(404).send({status: 404, message: 'Resource not found'})
});

module.exports = router
