const Sequelize = require('sequelize')

const User = require('../models/User')
const Articles = require('../models/Articles')
const Comments = require('../models/Comments')
const Follows = require('../models/Follows')

const dbConfig = require('../config/database')

const connection = new Sequelize(dbConfig);

User.init(connection)
Articles.init(connection)
Comments.init(connection)
Follows.init(connection)


Articles.associate(connection.models)
User.associate(connection.models)
Comments.associate(connection.models)
Follows.associate(connection.models)


module.exports = connection
