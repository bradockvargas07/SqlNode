'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('addresses',{
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
      zipcode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      number: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
    return queryInterface.dropTable('addresses');

  }
};
