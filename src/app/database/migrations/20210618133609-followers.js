'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('followers', {
    id:{
      type: Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
    },
    follow_id:{
      type: Sequelize.INTEGER,
      allowNull:false, 
      references:{model:'users', key:'id'}, 
      onUpdate: 'CASCADE',
      ondDelete: 'CASCADE',
    },
    follower_id:{
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
  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable('followers');
    
  }
  }
};
