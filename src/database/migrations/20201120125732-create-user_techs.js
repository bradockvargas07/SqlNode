'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_techs',{
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {model:'users', key: 'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
      },
      tech_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {model:'techs', key: 'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
      },
      created_at:{
        type:DataTypes.DATE,
        allowNull:false,
      },
      updated_at:{
        type:DataTypes.DATE,
        allowNull:false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_techs');

  }
};
