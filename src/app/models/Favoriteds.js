const {Model, DataTypes} = require('sequelize')

class Favoriteds extends Model {
    static init(sequelize) {
        super.init({
           
        },{
            sequelize
        })        
    }
    static associate(models){
        //this.hasMany(models.Articles, {foreignKey: 'article_id', as:'favorited'})
    }
    
}
module.exports = Favoriteds