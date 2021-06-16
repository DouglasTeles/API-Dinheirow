const Sequelize = require('sequelize')

const User = require('../models/User')
const Articles = require('../models/Articles')

const dbConfig = require('../config/database')

const connection = new Sequelize(dbConfig);

User.init(connection)
Articles.init(connection)

//Articles.associate(connection.models)
//User.associate(connection.models)

module.exports = connection
