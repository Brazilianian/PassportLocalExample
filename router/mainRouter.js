const express = require('express')
const router = express.Router()

const { MainController } = require('../controller/mainController')

router.get('/', MainController.getUser)

module.exports = { mainRouter: router }