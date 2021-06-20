'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('favoriteds', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      article_id:{
        type: Sequelize.INTEGER,
        allowNull:false, 
        references:{model:'articles', key:'id'}, 
        onUpdate: 'CASCADE',
        ondDelete: 'CASCADE',
      },
      user_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{model:'users', key:'id'}, 
        onUpdate: 'CASCADE',
        ondDelete: 'CASCADE',
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull:false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull:false
    }


  })
},

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('favoriteds');
  }
};
