const { UserModule } = require('../module/userModule')

async function registration(req, res, next) {
    let user = {
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        surname: req.body.surname,
        role: 'USER'
    }

    let dbUser = await UserModule.findOne({
        username: user.username
    })

    if (dbUser) {
        res
            .status(400)
            .send("User with the same username already exists")
        return
    }

    let savedUser = await UserModule.create(user)
    res
        .status(201)
        .send(savedUser)
}

module.exports = { registration }