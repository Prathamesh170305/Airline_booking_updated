'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    static associate(models) {
      this.belongsTo(models.City, {
        foreignKey: 'cityId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Airport.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: DataTypes.STRING,
      cityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Cities', // Ensure this matches your table name
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Airport',
      tableName: 'Airports', // Explicitly set table name
    }
  );
  return Airport;
};
