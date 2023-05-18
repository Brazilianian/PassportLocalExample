const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConfig')

const UserModel = sequelize.define("user", {
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    surname: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING
    },
})

module.exports = { UserModel }