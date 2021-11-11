const express = require('express')
const router = express.Router()

router.post('/:name', (req, res) => {
    res.send({message: `Hello, ${req.body.name}`})
})

module.exports = router