const {Model, DataTypes} = require('sequelize')

class Tags extends Model {
    static init(sequelize) {
        super.init({
            tagname:DataTypes.STRING
        },{
            sequelize
        })        
    }
    static associate(models){
        this.belongsToMany(models.Articles, {foreignKey: 'tag_id', through:'articles_tags', as: 'nameTags'})
    }
}
module.exports = Tags