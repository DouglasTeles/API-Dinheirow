// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
    
//     await queryInterface.createTable('users', { 
//       id:{
//         type: Sequelize.INTEGER,
//         primaryKey:true,
//         autoIncrement:true,
//         allowNull:false
//       }, 
//       title:{
//         type: Sequelize.STRING(50),
//         allowNull:false,
//       }, 
//       slug:{
//         type: Sequelize.STRING(150),
//         allowNull:false
//       },      
//       description:{
//         type: Sequelize.STRING(50),
//         allowNull:false
//       },
//       body:{
//         type: Sequelize.STRING(50),
//         allowNull:true
//       },
//       tagList:{
//         type: Sequelize.STRING(50),
//         allowNull:true
//       }, 
//       favorited:{
//         type: Sequelize.BOOL(false)
//       },
//       favoritesCount:{
//         type: Sequelize.INTEGER(10)
//       },
//       author:{

//       },   
//       created_at:{
//         type: Sequelize.DATE,
//         allowNull:false
//       },
//       updated_at:{
//         type: Sequelize.DATE,
//         allowNull:false
//       }
           
//     });
     
//   },

//   down: async (queryInterface, Sequelize) => {
   
//     await queryInterface.dropTable('users');
    
//   }
// };
