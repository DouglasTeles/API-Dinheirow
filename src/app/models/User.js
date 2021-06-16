const {Model, DataTypes} = require('sequelize')

class User extends Model {
    static init(sequelize) {
        super.init({
            username:DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            bio: DataTypes.STRING,
            image: DataTypes.STRING,
        },{
            sequelize
        })        
    }
    static associate(models){
        this.hasMany(models.Articles, {foreignKey: 'user_id', as:'articles'})
    }
    
}
module.exports = User