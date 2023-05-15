const express = require('express')
const port = 3000
const dotenv = require('dotenv')
dotenv.config({path: './.env'})

require('./dbConfig')
require('./module/index')

const { authRouter } = require('./router/userRouter')

const app = express()

app.use(express.json())

app.use('/api/v1/auth', authRouter)

app.listen(port, () => {
    console.log(`Application started on port ${port}`)
})