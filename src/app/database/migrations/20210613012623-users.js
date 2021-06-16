'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('users', { 
      id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      }, 
      username:{
        type: Sequelize.STRING(50),
        allowNull:false,
      }, 
      email:{
        type: Sequelize.STRING(150),
        allowNull:false
      },      
      password:{
        type: Sequelize.STRING(255),
        allowNull:false
      },
      bio:{
        type: Sequelize.STRING(255),
        allowNull:true
      },
      image:{
        type: Sequelize.STRING(255),
        allowNull:true
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
   
    await queryInterface.dropTable('users');
    
  }
};
