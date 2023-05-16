const passport = require("passport");
const bcrypt = require('bcrypt')
const {UserService} = require('../service/userService')

class AuthController {
    static async registration(req, res, next) {
        let user = {
            username: req.body.username,
            password: req.body.password,
            name: req.body.name,
            surname: req.body.surname,
            role: 'USER'
        }

        let dbUser = await UserService.getUserByUsername(user.username)

        if (dbUser) {
            res
                .status(400)
                .send("User with the same username already exists")
            return
        }

        user.password = bcrypt.hashSync(user.password, 8)

        let savedUser = await UserService.saveUser(user)
        res
            .status(201)
            .send(savedUser)
    }

    static async login(req, res, next) {
        passport.authenticate('local', {}, (err, user) => {
            if (err) {
                throw err
            }

            if (!user) {
                res.send("Invalid username or password")
                return
            }

            req.logIn(user, (err) => {
                if (err) {
                    throw err
                }
                res.send("Successfully authenticated")
            })
        })(req, res, next)
    }

    static async logout(req, res, next) {
        req.session.destroy((err) => {
            if (err) {
                res
                    .status(400)
                    .send("Failed to logout")
                return
            }
            res
                .status(200)
                .clearCookie('connect.sid')
                .send("Successfully logged out")
        })


    }
}

module.exports = { AuthController }