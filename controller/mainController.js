class MainController {
    static getUser(req, res, next) {
        let user = req.user

        if (typeof user === 'undefined') {
            res
                .status(401)
                .send("User is unauthorized")
            return
        }

        res
            .status(200)
            .send(user)
    }
}

module.exports = { MainController }