const express = require('express')
const { AuthController } = require('../controller/authController')

const router = express.Router();

router.post('/registration', AuthController.registration)
router.post('/login', AuthController.login)
router.post('/logout', AuthController.logout)

module.exports = { authRouter: router }