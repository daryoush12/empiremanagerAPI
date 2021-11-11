const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send({message: 'Root of example routes'})
})

module.exports = router