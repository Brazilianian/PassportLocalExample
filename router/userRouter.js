const express = require('express')
const {registration} = require('../service/userService')

const router = express();

router.post('/registration', registration)

module.exports = { authRouter: router }