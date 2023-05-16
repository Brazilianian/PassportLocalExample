const express = require('express')
const port = 3000

const passport = require('passport')
const CookieParser = require('cookie-parser')
const session = require('express-session')

const dotenv = require('dotenv')
dotenv.config({path: './.env'})

require('./config/dbConfig')
require('./module/index')

const { authRouter } = require('./router/authRouter')
const {userRouter} = require("./router/userRouter");

const app = express()

app.use(express.json())

const secret = process.env.COOKIE_SECRET

app.use(session({
    secret: secret,
    resave: true,
    saveUninitialized: true
}))
app.use(CookieParser(secret))

app.use(passport.initialize({}))
app.use(passport.session({}))

require('./config/passportConfig')(passport)

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/user', userRouter)

app.listen(port, () => {
    console.log(`Application started on port ${port}`)
})