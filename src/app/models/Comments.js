const {Model, DataTypes} = require('sequelize')

class Comments extends Model {
    static init(sequelize) {
        super.init({
            comment:DataTypes.STRING,
            
        },{
            sequelize
        })        
    }
    static associate(models){
        this.belongsTo(models.Articles, {foreignKey: 'article_id', as: 'comments'})
        this.belongsTo(models.User, {foreignKey: 'user_id', as: 'usercomments'})
    }
}
module.exports = Comments