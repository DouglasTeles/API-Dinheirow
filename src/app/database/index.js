const Sequelize = require('sequelize')

const User = require('../models/User')
const Articles = require('../models/Articles')
const Favoriteds = require('../models/Favoriteds')
const Follows = require('../models/Follows')

const dbConfig = require('../config/database')

const connection = new Sequelize(dbConfig);

User.init(connection)
Articles.init(connection)
Favoriteds.init(connection)
Follows.init(connection)

Articles.associate(connection.models)
User.associate(connection.models)
Favoriteds.associate(connection.models)
Follows.associate(connection.models)


module.exports = connection
