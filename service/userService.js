const {UserModule} = require('../module/userModule')

class UserService {
    static async getUserByUsername (username) {
        return await UserModule.findOne({
            username: username
        })
    }

    static async saveUser(user) {
        return UserModule.create(user);
    }

    static async getUserById(id) {
        return UserModule.findByPk(id);
    }
}

module.exports = { UserService }