'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('articles', { 
      id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      }, 
      title:{
        type: Sequelize.STRING(100),
        allowNull:false
      }, 
      slug:{
        type: Sequelize.STRING(100),
        allowNull:true
      },      
      description:{
        type: Sequelize.STRING(100),
        allowNull:false
      },
      body:{
        type: Sequelize.STRING(100),
        allowNull:false
      },
      tag_list:{
        type: Sequelize.STRING(100),
        allowNull:true
      },
      favorited:{
        type: Sequelize.BOOLEAN(false),
        allowNull:false
      },
      favorites_count:{
        type: Sequelize.INTEGER,
        allowNull:false
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
           
    });
     
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.dropTable('articles');
    
  }
};
