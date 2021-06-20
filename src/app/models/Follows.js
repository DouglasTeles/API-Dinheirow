const {Model, DataTypes} = require('sequelize')

class Follows extends Model {
    static init(sequelize) {
        super.init({
            follow_id:DataTypes.INTEGER,
            follower_id:DataTypes.INTEGER
        },{
            sequelize
        })        
    }
    static associate(models){
        this.belongsToMany(models.User,{foreignKey: 'follow_id', through:'followers', as: 'follows'})
    }
    //criar um follow
}
module.exports = Follows