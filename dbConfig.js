const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
})

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    })

sequelize.sync()
    .then(() => {
        console.log("Synced")
    })
    .catch(() => {
        console.log("Failed to sync")
    })

module.exports = { sequelize }