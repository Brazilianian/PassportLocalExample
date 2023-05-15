class MainController {
    static getUser(req, res, next) {
        res.send(req.user)
    }
}

module.exports = { MainController }