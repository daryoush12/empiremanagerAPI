const express = require('express')
const router = express.Router()

const get = require('./get')
const post = require('./post')

router.use('/example', get)
router.use('/example', post)

module.exports = router
