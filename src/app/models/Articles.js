const {Model, DataTypes} = require('sequelize')

class Articles extends Model {
    static init(sequelize) {
        super.init({
            title:DataTypes.STRING,
            slug: DataTypes.STRING,
            description: DataTypes.STRING,
            body: DataTypes.STRING,
            tag_list: DataTypes.STRING,
            favorited: DataTypes.BOOLEAN,
            favorites_count: DataTypes.INTEGER,
        },{
            sequelize
        })        
    }
        static associate(models){
        this.belongsTo(models.User, {foreignKey: 'user_id', as:'writer'}),
        this.belongsTo(models.User, {foreignKey: 'username', as:'author'})
        }
    
}
module.exports = Articles