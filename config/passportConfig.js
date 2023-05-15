const { UserService } = require('../service/userService')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy

module.exports = function (passport) {
    passport.use(
        new LocalStrategy(async (username, password, done) => {
            let dbUser = await UserService.getUserByUsername(username)
            if (dbUser == null) {
                return done(null, false)
            }

            bcrypt.compare(password, dbUser.password, (err, result) => {
                if (err) {
                    throw err
                }

                if (result) {
                    return done(null, dbUser)
                }

                return done(null, false)
            })
        })
    )

    passport.serializeUser((user , cb) => {
        cb(null, user.id)
    })

    passport.deserializeUser(async (id, cb) => {
        const user = await UserService.getUserById(id)
        const userInfo = {
            username: user.username,
            id: user.id
        }

        cb(null, userInfo)
    })
}